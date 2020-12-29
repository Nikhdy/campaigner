import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { setRoute } from 'app/stores/application/app.action';
import { TeamsListPage } from './team-list';
import { TeamMembersPage } from './team-members';


interface ITeamProps {
  match: any;
  setRoute: (route: string) => void;
}

interface ITeamState {

}

class TeamsUnwrapped extends React.Component<ITeamProps, ITeamState> {

  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.setRoute("TEAMS");
  }

  render() {
    const { match } = this.props;
    return <div className='content-i'>
      <Switch>
        <Route exact path={match.path} component={TeamsListPage} />
        <Route path={match.path + "/:teamId/members"} component={TeamMembersPage} />
      </Switch>
    </div>
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setRoute: (route: string) => dispatch(setRoute(route)),
  }
}
const mapStateToProps = (state) => {
  return {

  }
}
export const TeamsPage = connect(mapStateToProps, mapDispatchToProps)(TeamsUnwrapped)