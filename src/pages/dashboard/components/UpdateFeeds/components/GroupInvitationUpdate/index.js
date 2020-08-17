import EmptyCard from "../../../DashboardInner/EmptyCard";
import React, { Fragment, useState } from "react";
import GroupInvitationUpdateItem from "./components/GroupInvitationUpdateItem";
import GroupInvitationActionModal from "./components/GroupInvitationActionModal";
import { connect, useDispatch } from "react-redux";
import produce from "immer";
import { treatGroupSavingsInvitation } from "state/slices/savings";
import SelectCardModal from "./components/SelectCardModal";
import AcceptSavingsSuccessModal from "./components/AcceptSavingsSuccessModal";

const GroupInvitationUpdate = ({ invitations }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    isActionModalVisible: false,
    isSelectCardModalVisible: false,
    isAcceptSavingsSuccessModalVisible: false,
    isAcceptLoading: false,
    isDeclineLoading: false,
    invitation: {},
  });

  const onInvitationItemClick = (e, invitation) => {
    e.preventDefault();
    setState(
      produce((draft) => {
        draft.acceptError = null;
        draft.isActionModalVisible = true;
        draft.invitation = invitation;
      })
    );
  };

  const onActionModalClose = () => {
    setState(
      produce((draft) => {
        draft.isActionModalVisible = false;
      })
    );
  };

  const handleAcceptSavingsSuccessModalClose = () => {
    setState(
      produce((draft) => {
        draft.isAcceptSavingsSuccessModalVisible = false;
      })
    );
  };

  const handleSelectCardBackClick = () => {
    setState(
      produce((draft) => {
        draft.isActionModalVisible = true;
        draft.isSelectCardModalVisible = false;
      })
    );
  };

  const handleSelectCardModalClose = () => {
    setState(
      produce((draft) => {
        draft.isSelectCardModalVisible = false;
      })
    );
  };

  const onInvitationAccept = () => {
    setState(
      produce((draft) => {
        draft.isActionModalVisible = false;
        draft.isSelectCardModalVisible = true;
      })
    );
  };

  const handleSelectCardModalSubmit = async (formValues) => {
    const { id: invitationId, groupSavingsType } = state.invitation;

    const payload = {
      groupSavingsType: groupSavingsType,
      formValues: {
        allowCardDebit: true,
        cardId: formValues.cardId,
        invitationId: invitationId,
        isAccepted: true,
      },
    };

    setState(
      produce((draft) => {
        draft.isAcceptLoading = true;
      })
    );

    const resultAction = await dispatch(treatGroupSavingsInvitation(payload));
    if (treatGroupSavingsInvitation.fulfilled.match(resultAction)) {
      setState(
        produce((draft) => {
          draft.isAcceptLoading = false;
        })
      );
    } else {
      setState(
        produce((draft) => {
          draft.isAcceptLoading = false;
          draft.acceptError = resultAction.error.message;
        })
      );
    }
  };

  const onInvitationDecline = () => {
    declineGroupSavingInvitation().then(undefined);
  };

  const declineGroupSavingInvitation = async () => {
    const { id: invitationId, groupSavingsType } = state.invitation;

    const payload = {
      groupSavingsType: groupSavingsType,
      formValues: {
        invitationId,
        isAccepted: false,
      },
    };

    setState(
      produce((draft) => {
        draft.isDeclineLoading = true;
      })
    );

    const resultAction = await dispatch(treatGroupSavingsInvitation(payload));
    if (treatGroupSavingsInvitation.fulfilled.match(resultAction)) {
      setState(
        produce((draft) => {
          draft.isActionModalVisible = false;
          draft.isDeclineLoading = false;
        })
      );
    } else {
      setState(
        produce((draft) => {
          draft.isDeclineLoading = false;
        })
      );
    }
  };

  return (
    <Fragment>
      {invitations.length === 0 ? (
        <EmptyCard
          title="Nothing to see here yet."
          message="You have no group savings invitations at the moment."
        />
      ) : (
        <Fragment>
          {invitations.map((invitation, index) => (
            <div key={index} className="transaction-wealth--padding">
              <GroupInvitationUpdateItem
                invitation={invitation}
                onClickItem={onInvitationItemClick}
              />
            </div>
          ))}
        </Fragment>
      )}

      <GroupInvitationActionModal
        isVisible={state.isActionModalVisible}
        invitationId={state.invitation.id}
        isDeclineLoading={state.isDeclineLoading}
        onAccept={onInvitationAccept}
        onDecline={onInvitationDecline}
        onClose={onActionModalClose}
      />

      <SelectCardModal
        isVisible={state.isSelectCardModalVisible}
        isAcceptLoading={state.isAcceptLoading}
        acceptError={state.acceptError}
        onSubmit={handleSelectCardModalSubmit}
        onBack={handleSelectCardBackClick}
        onClose={handleSelectCardModalClose}
      />

      <AcceptSavingsSuccessModal
        isVisible={state.isAcceptSavingsSuccessModalVisible}
        onClose={handleAcceptSavingsSuccessModalClose}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  invitations: state.savings.pendingInvitationsEntities,
});

export default connect(mapStateToProps)(GroupInvitationUpdate);
