import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import InvestHome from "./InvestHome";
import AddInvestment from "./components/addInvestments/AddInvestment";
import InvestmentInfo from "./components/investmentInfo/InvestmentInfo";
import AddInvestmentForm from "./components/addInvestmentForm/AddInvestmentForm";
import FundInvestment from "./fundInvestment/FundInvestment";
import ViewInvestment from "./viewAnInvestment/ViewInvestment";
import FundExistingInvestment from "./viewAnInvestment/component/fundExistingInvestment/FundExistingInvestment";
import WithdrawInvestment from "./withdrawInvestment/WithdrawInvestment";
import RollOver from "./rollOverInvestment/RollOver";
import TerminateInvestment from "./terminateInvestment/TerminateInvestment";
import InvestModal from "./components/investModal/InvestModal";
import DollarInvestment from "./dollarInvestment/DollarInvestment";

const Investment = () => {
  const { path } = useRouteMatch();

  // const [createInvestnvestData, setCreateInvestData] = useState();
  // const [fundInvestmentType, setFundInvestmentType] = useState(null);
  // const [modalOne, setModalOne] = useState(false);
  // const setInvestData = (val) => {
  //   setCreateInvestData(val);
  // };
  // const setInvetType = (val) => {
  //   setFundInvestmentType(val);
  // };
  // const setFirstModal = (val) => {
  //   setModalOne(val);
  // };

  return (
    <Switch>
      {/* <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
        <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
          hi
        </div>
      </div> */}
      <Route exact path={`${path}`} component={InvestHome} />
      <Route exact path={`${path}/add-investment`} component={AddInvestment} />
      <Route
        exact
        path={`${path}/investment-info`}
        component={InvestmentInfo}
      />
      {/* <Route
        exact
        path={`${path}/add-investment-form`}
        component={(props) => (
          <AddInvestmentForm
            prop={props}
            // myInvestType={fundInvestmentType}
            // myModal={setFirstModal}
            // myFundData={setInvestData}
          />
        )}
      /> */}

      <Route
        exact
        path={`${path}/add-investment-form`}
        component={AddInvestmentForm}
      />
      <Route
        exact
        path={`${path}/fund-investment`}
        component={FundInvestment}
      />
      <Route
        exact
        path={`${path}/fund-investment/existing`}
        component={FundExistingInvestment}
      />
      <Route
        exact
        path={`${path}/view-investment`}
        component={ViewInvestment}
      />
      <Route
        exact
        path={`${path}/view-investment/withdraw`}
        component={WithdrawInvestment}
      />
      <Route
        exact
        path={`${path}/view-investment/roll-over`}
        component={RollOver}
      />
      <Route
        exact
        path={`${path}/view-investment/terminate`}
        component={TerminateInvestment}
      />
      <Route
        exact
        path={`${path}/dollar-investment`}
        component={DollarInvestment}
      />

      {/* {modalOne ? (
        <InvestModal
          myclose={setFirstModal}
          MycreateInvestmentData={createInvestnvestData}
          investType={fundInvestmentType}
        />
      ) : null} */}
    </Switch>
  );
};

export default Investment;
