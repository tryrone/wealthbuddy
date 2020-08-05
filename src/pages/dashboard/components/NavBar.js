import React from "react";
import DashboardIcon from "static/dashboard.svg";
import LetterMark from "static/lettermark.svg";
import Logo from "static/white_logo.svg";
import SavingsIcon from "static/savings.svg";
import InvestmentIcon from "static/investment.png";
import WalletIcon from "static/wallet.svg";
import SettingsIcon from "static/settings.svg";
import { NavLink } from "react-router-dom";
import Logout from "shared-components/svgs/Logout";
import NavShape from "shared-components/svgs/NavShape";
import LegalIcon from "shared-components/svgs/LegalIcon";
import { logout } from "state/slices/account";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import classNames from "classnames";

const menuItems = [
  {
    name: "Savings",
    icon: SavingsIcon,
    path: "/dashboard/savings",
  },
  {
    name: "Investment",
    icon: InvestmentIcon,
    path: "/dashboard/investment",
  },
  {
    name: "Wallet",
    icon: WalletIcon,
    path: "/dashboard/wallet",
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    path: "/dashboard/settings",
  },
];

const NavMenuItem = ({ name, icon, path }) => (
  <li>
    <NavLink to={path} className="flex items-center px-6 py-4">
      <i className="inline-block w-8 mr-2">
        <img src={icon} alt="" />
      </i>
      <span>{name}</span>
    </NavLink>
  </li>
);

const NavBar = ({ account, dispatchLogout }) => {
  const history = useHistory();
  const { customerDetails } = account;
  const userIsNew = !(account.isBVNAdded && account.isCardAdded);

  const handleLogout = () => {
    dispatchLogout();
    sessionStorage.removeItem("persist:root");
    history.push("/auth/login");
  };

  return (
    <nav className="w-72 desktop-nav h-screen flex flex-col bg-wb-primary justify-between items-center pt-20 pb-5">
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
        <li className="cursor-pointer">
          <NavLink
            to={`/dashboard`}
            exact
            className="flex items-center px-6 py-4"
          >
            <i className="inline-block w-8 mr-2">
              <img src={DashboardIcon} alt="" />
            </i>
            <span>{`Dashboard`}</span>
          </NavLink>
        </li>
        {menuItems.map((item) => (
          <NavMenuItem key={item.name} {...item} />
        ))}
      </ul>
      <ul className="extra-nav--item mb-5">
        <li className="nav-extra">
          <span className="extra-icon">
            <LegalIcon />
          </span>
          Legal
        </li>
        <li className="nav-extra" onClick={handleLogout}>
          <span className="extra-icon">
            <Logout />
          </span>
          Sign Out
        </li>
      </ul>
      <div className="flex w-full watermark">
        <img src={Logo} className="mr-2" alt="" />
        <img src={LetterMark} alt="" />
      </div>
      <span className="navShape">
        <NavShape />
      </span>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  account: state.account.data,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
