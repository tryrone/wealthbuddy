import EmptyCard from "../../../DashboardInner/EmptyCard";
import React, { Fragment, useState } from "react";
import GroupInvitationUpdateItem from "./GroupInvitationUpdateItem";
import GroupInvitationActionModal from "./GroupInvitationActionModal";
import { connect } from "react-redux";
import produce from "immer";

const GroupInvitationUpdate = ({ invitations }) => {
  const [state, setState] = useState({
    isActionModalVisible: false,
    invitationId: null,
  });

  const onInvitationItemClick = (e, invitationId) => {
    e.preventDefault();
    setState(
      produce((draft) => {
        draft.isActionModalVisible = true;
        draft.invitationId = invitationId;
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
        invitationId={state.invitationId}
        onClose={onActionModalClose}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  invitations: state.savings.pendingInvitationsEntities,
});

export default connect(mapStateToProps)(GroupInvitationUpdate);
