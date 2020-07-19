import React from "react";
import { notificationIcon, searchIcon } from "assets/exports";
import WealthLogo from "assets/img/wealthBuddy-logo.svg";
import { connect } from "react-redux";

const Header = ({ dashboard }) => {
  const handleToggle = () => {};

  return (
    <React.Fragment>
      <div className="flex justify-between px-12 pb-12 header-wrap items-center">
        <div className="search-field">
          <input className="header-search" type="search" placeholder="Search" />
          <span
            className="search-header"
            dangerouslySetInnerHTML={{ __html: searchIcon }}
          />
        </div>
        <div className="notification-icon flex justify-between items-center">
          <div className="status-progress">
            <h2 className="font-medium text-normal text-xs">
              Account progress
            </h2>
            <div className="user-progress--bar">
              <div
                className="user-single--progress"
                style={{ width: `${dashboard.profileUpdateStatus}%` }}
              />
            </div>
            <h2 className="font-medium text-center text-normal mt-1 color-green text-xs">
              {`${dashboard.profileUpdateStatus}%`}
            </h2>
          </div>
          <span
            className={`notification-icon--inline`}
            dangerouslySetInnerHTML={{ __html: notificationIcon }}
          />
        </div>
      </div>

      <div className="flex justify-between px-12 pb-12 header-wrap mobile-header--wrap items-center">
        <div className="wealthbuddy-mobile--logo" onClick={handleToggle}>
          <div className="mobile-hamburger">
            <div className={`menu hamburger`}>
              <div className="icon" />
            </div>
          </div>
          <img className="wealth-mobile--icon" src={WealthLogo} />
        </div>
        <div className="notification-icon">
          <span
            className={`notification-icon--inline`}
            dangerouslySetInnerHTML={{ __html: notificationIcon }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard.data,
});

export default connect(mapStateToProps)(Header);
