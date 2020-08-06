import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LegalIcon from "shared-components/svgs/LegalIcon";
import Logout from "shared-components/svgs/Logout";
import { connect } from "react-redux";
import classNames from "classnames";
import { closeMobileNavOnClick } from "utils";
import NavigationContext from "contexts/NavigationContext";
import navbarMenuItems from "config/navbarMenuItems";

const NavMenuItem = ({ name, icon, path, exact, onClick }) => (
  <li onClick={onClick}>
    <NavLink exact={exact} to={path} className="flex items-center px-6 py-4">
      <i className="inline-block w-8 mr-2">
        <img src={icon} alt="" />
      </i>
      <span className="pr-16">{name}</span>
    </NavLink>
  </li>
);

const MobileNav = ({ account }) => {
  const { isMobileNavOpen, closeMobileNavbar, logoutUser } = useContext(
    NavigationContext
  );
  const { customerDetails } = account;
  const userIsNew = !(account.isBVNAdded && account.isCardAdded);

  useEffect(() => {
    closeMobileNavOnClick(closeMobileNavbar);
  }, [isMobileNavOpen]);

  return (
    isMobileNavOpen && (
      <div className="wealth-mobile--nav">
        <nav className="w-72 mobile-nav h-screen flex flex-col bg-wb-primary justify-between items-center py-20">
          <div className="flex flex-col w-full justify-center items-center mb-12 text-white">
            <figure className="flex flex-col items-center justify-center">
              {customerDetails.picture !== null ? (
                <img src={customerDetails.picture} alt="" className="mb-4" />
              ) : (
                <div className="user-no--picture mb-4">
                  {`${customerDetails.otherNames.charAt(
                    0
                  )}${customerDetails.lastName.charAt(0)}`}
                </div>
              )}
              <figcaption className="font-medium text-center">
                {`${customerDetails.otherNames} ${customerDetails.lastName}`}
              </figcaption>
            </figure>
          </div>
          <ul
            className={classNames({
              "flex-grow navIcons w-full text-white": true,
              "menu-inactive": userIsNew,
            })}
          >
            {navbarMenuItems.map((obj) => (
              <NavMenuItem
                key={obj.name}
                onClick={closeMobileNavbar}
                {...obj}
              />
            ))}
          </ul>
          <ul className="extra-nav--item mb-5">
            <li className="nav-extra">
              <span>
                <span className="extra-icon">
                  <LegalIcon />
                </span>
                Legal
              </span>
            </li>
            <li className="nav-extra" onClick={logoutUser}>
              <span>
                <span className="extra-icon">
                  <Logout />
                </span>
                Sign Out
              </span>
            </li>
          </ul>
        </nav>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  account: state.account.data,
});

export default connect(mapStateToProps)(MobileNav);
