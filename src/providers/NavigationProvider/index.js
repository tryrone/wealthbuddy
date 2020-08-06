import React, { Fragment, useState } from "react";
import NavigationContext from "contexts/NavigationContext";
import { useDispatch } from "react-redux";
import { logout } from "state/slices/account";
import { useHistory } from "react-router-dom";

const NavigationProvider = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const openMobileNavbar = () => {
    setMobileNavOpen(true);
  };

  const closeMobileNavbar = () => {
    setMobileNavOpen(false);
  };

  const logoutUser = () => {
    dispatch(logout());
    sessionStorage.removeItem("persist:root");
    history.push("/auth/login");
  };

  const contextValue = {
    isMobileNavOpen,
    openMobileNavbar,
    closeMobileNavbar,
    logoutUser,
  };

  return (
    <Fragment>
      <NavigationContext.Provider value={contextValue}>
        {props.children}
      </NavigationContext.Provider>
    </Fragment>
  );
};

export default NavigationProvider;
