import React, { Fragment, useContext } from "react";
import { notificationIcon, searchIcon } from "assets/exports";
import WealthLogo from "assets/img/wealthBuddy-logo.svg";
import { connect } from "react-redux";
import NavigationContext from "contexts/NavigationContext";

const Header = ({ dashboard }) => {
  const { openMobileNavbar } = useContext(NavigationContext);

  return (
    <Fragment>
      <div className="flex justify-end px-12 pb-12 header-wrap items-center">
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
        </div>
      </div>

      <div className="flex justify-between px-12 pb-12 header-wrap mobile-header--wrap items-center">
        <div className="wealthbuddy-mobile--logo" onClick={openMobileNavbar}>
          <div className="mobile-hamburger">
            <div className={`menu hamburger`}>
              <div className="icon" />
            </div>
          </div>
          <img className="wealth-mobile--icon" src={WealthLogo} alt="" />
        </div>
        <div className="notification-icon">
          <span
            className={`notification-icon--inline`}
            dangerouslySetInnerHTML={{ __html: notificationIcon }}
          />
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard.data,
});

export default connect(mapStateToProps)(Header);
