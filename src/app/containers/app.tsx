import * as React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { LoginPage } from "./auth/login";
import { Route, Switch } from "react-router";
import { RegisterPage } from "./auth/register";
import { ResetPasswordPage } from "./auth/reset-password";

import { me } from "app/stores/account/account.action";
import { Inbox } from "app/containers/inbox/inbox";
import { TeamsPage } from "app/containers/teams/teams";
import { Settings } from "app/containers/settings/settings";
import { Calander } from "app/containers/calander/calander";
import { Campaigns } from "app/containers/campaign/campaigns";
import { Dashboard } from "app/containers/dashboard/dashboard";
import { Prospects } from "app/containers/prospects/prospects";
import { Templates } from "app/containers/templates/templates";
import { Loader } from "app/shared/loader";
import {
  SideNavigationComponent,
  TopNavigationComponent,
  MobileSideNavigationComponent,
} from "../core";
import ApplicationModals from "./modals";
import ErrorBoundry from "../core/error-boubdry";
interface IAppProps {
  user: Account.IUser;
  me: () => void;
  loading: boolean;
  history?: any;
  location?: any;
}

const ReactApp: React.FC<IAppProps> = (props: IAppProps) => {
  useEffect(() => {
    props.me();
  }, []);

  useEffect(() => {
    const isInLoggedOutRoute =
      props.location.pathname === "/" ||
      props.location.pathname === "/login" ||
      props.location.pathname === "/register";
    if (props.user) {
    } else {
      // if (!isInLoggedOutRoute && !nextProps.loading) {
      //   props.history.push("/login");
      // }
    }
  }, [props.user]);

  const { user, loading } = props;
  const isLoggedIn = user ? true : false;
  document.body.className = isLoggedIn
    ? "menu-position-side menu-side-left full-screen with-content-panel"
    : "auth-wrapper";
  return (
    <div
      className={
        isLoggedIn
          ? "all-wrapper with-side-panel solid-bg-all"
          : "all-wrapper menu-side with-pattern"
      }
    >
      {/* {isLoggedIn && !loading && */}
      {isLoggedIn && (
        <ErrorBoundry>
          <div className="layout-w">
            <MobileSideNavigationComponent />
            <SideNavigationComponent />
            <div className="content-w">
              <TopNavigationComponent />
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/campaigns" component={Campaigns} />
                <Route path="/prospects" component={Prospects} />
                <Route path="/teams" component={TeamsPage} />
                <Route path="/calander" component={Calander} />
                <Route path="/settings" component={Settings} />
                <Route path="/inbox" component={Inbox} />
                <Route path="/templates" component={Templates} />
              </Switch>
              <ApplicationModals />
            </div>
          </div>
        </ErrorBoundry>
      )}
      {/* {isLoggedIn && loading &&
          <Loader />
        } */}

      {!isLoggedIn && (
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/forgotPassword" component={ResetPasswordPage} />
        </Switch>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    me: () => dispatch(me()),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.accountReducer.user,
    loading: state.accountReducer.loading,
  };
};

export const App = connect(mapStateToProps, mapDispatchToProps)(ReactApp);
