import React from "react";
import { Route, Switch } from "react-router-dom";
import MobileNav from "./components/MobileNav";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import DasboardHome from "./components/DasboardHome";
import Savings from "pages/savings";

const mobileMenu = false;
const newUser = false;

function Dashboard() {
  return (
    <div className="flex">
      {/* mobile menu start */}
      {mobileMenu ? (
        <div className="wealth-mobile--nav">
          <MobileNav />
        </div>
      ) : null}
      {/* DeskTop Menu */}
      <NavBar />

      <section
        className={`flex-grow ${
          newUser === false ? "existing-entry" : "new-user"
        }`}
      >
        <Header />
        <React.Fragment>
          <Switch>
            <Route exact path="/dashboard">
              <DasboardHome />
            </Route>

            <Route path="/dashboard/savings">
              <Savings />
            </Route>
          </Switch>
          {
            // newUser === false ?
            // <Switch>
            // <Route exact path={`${path}`}>
            //     <DashboardHome />
            // </Route>
            //     <Route path={`${path}/savings`}>
            //         <Savings refreshDashboard={getDashboard} getSavings={refreshSaving} getSavingsTransactions={getSavingsTransactions} />
            //     </Route>
            //     <Route path={`${path}/settings`}>
            //         <Settings refreshDashboard={getDashboard} getSavings={refreshSaving} />
            //     </Route>
            //     <Route path={`${path}/wallet`}>
            //         <Wallet refreshDashboard={getDashboard} getSavings={refreshSaving} />
            //     </Route>
            // </Switch> :
            // <NewUser />
          }
        </React.Fragment>
      </section>
      {/* <section className={`flex-grow ${newUser === false ? "existing-entry" : "new-user"}`}> */}
      {/* <Header /> */}

      {/* <React.Fragment>
            <Switch>
                <Route exact path={`${path}`}>
                    <DashboardHome />
                </Route>
            </Switch>
            </React.Fragment>
            </section> */}
    </div>
  );
}

export default Dashboard;
