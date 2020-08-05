import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ account, ...props }) => {
  const location = useLocation();

  return account.jwtToken ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect
      to={{
        pathname: "/auth/login",
        state: { from: location },
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  account: state.account.data,
});

export default connect(mapStateToProps)(PrivateRoute);
