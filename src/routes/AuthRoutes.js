import React from "react";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import Login from "../pages/auth/Login";
import SignUpPersonalDetails from "../pages/auth/SignUp/PersonalDetails";
import SignUpConfirmEmail from "../pages/auth/SignUp/ConfirmEmail";
import SignUpSetPassword from "../pages/auth/SignUp/SetPassword";
import SignUpSuccess from "../pages/auth/SignUp/Success";
import ForgotPassword from "../pages/auth/ForgotPassword/ForgotPassword";
import ForgotPasswordSuccess from "../pages/auth/ForgotPassword/ForgotPasswordSuccess";

const AuthRoutes = () => {
    let { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={`${path}/login`} component={Login} />
            <Route exact path={`${path}/sign-up`} component={SignUpPersonalDetails} />
            <Route exact path={`${path}/sign-up/verify-email`} component={SignUpConfirmEmail} />
            <Route exact path={`${path}/sign-up/set-password`} component={SignUpSetPassword} />
            <Route exact path={`${path}/sign-up/success`} component={SignUpSuccess} />
            <Route exact path={`${path}/forgot-password`} component={ForgotPassword} />
            <Route exact path={`${path}/forgot-password/success`} component={ForgotPasswordSuccess} />
        </Switch>
    );
}

export default AuthRoutes;
