import React, { Fragment, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { FaBell, FaUsers } from "react-icons/fa";
import classNames from "classnames";
import GeneralUpdate from "./components/GeneralUpdate";
import GroupInvitationUpdate from "./components/GroupInvitationUpdate";
import "./styles.scss";
import { connect } from "react-redux";

const Page = {
  GeneralUpdates: "general_updates",
  InvitationUpdates: "invitation_updates",
};

const UpdateFeeds = ({ invitations }) => {
  const [activePage, setActivePage] = useState(Page.InvitationUpdates);

  const setActiveToGeneralUpdates = (e) => {
    e.preventDefault();
    setActivePage(Page.GeneralUpdates);
  };

  const setActiveToInvitationUpdates = (e) => {
    e.preventDefault();
    setActivePage(Page.InvitationUpdates);
  };

  return (
    <Fragment>
      <div className="card-label update-header">
        <div className="flex flex-row justify-between mb-6">
          <h1 className="text-4xl font-medium card-header">
            {activePage === Page.GeneralUpdates
              ? "Updates"
              : "Group invitations"}
          </h1>
          <div className="flex flex-row">
            <a
              href="#"
              onClick={setActiveToGeneralUpdates}
              className={classNames({
                "rounded-lg text-black tab-icon general-update": true,
                active: activePage === Page.GeneralUpdates,
              })}
            >
              <FaBell />
            </a>
            <a
              href="#"
              onClick={setActiveToInvitationUpdates}
              className={classNames({
                "rounded-lg text-black tab-icon group-invitation": true,
                active: activePage === Page.InvitationUpdates,
              })}
            >
              {invitations && invitations.length > 0 && (
                <div className="notification-badge">{invitations.length}</div>
              )}
              <FaUsers />
            </a>
          </div>
        </div>
      </div>
      <PerfectScrollbar>
        {activePage === Page.GeneralUpdates ? (
          <GeneralUpdate />
        ) : (
          <GroupInvitationUpdate />
        )}
      </PerfectScrollbar>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  invitations: state.savings.pendingInvitationsEntities,
});

export default connect(mapStateToProps)(UpdateFeeds);
