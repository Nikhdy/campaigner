import * as _ from 'lodash';
import * as React from 'react';
import Avatar from 'react-avatar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { datePastDayStr, dateTimeStr } from 'app/utils';
import { fetchTeams, createTeam, modifyTeamMember } from 'app/stores/team/team.action';
import { showModal } from 'app/stores/application/app.action';

interface ITeamListProps {
  match: any;
  fetchTeams: () => void;
  createTeam: (team) => void;
  teams: Team.ITeam[];
  modifyTeamMember: (id: string | number) => void;
  showModal: (modal: string) => void;

}

interface ITeamListState {
}

class TeamListUnwrapped extends React.Component<ITeamListProps, ITeamListState> {
  componentWillMount() {
    this.fetchTeams();
  }

  fetchTeams() {
    this.props.fetchTeams();
  }
  onCreateTeamClick = () => {
    this.props.showModal('showCreateModal');
  }

  onDeleteTeam = (id) => {
    return () => {
      this.props.modifyTeamMember(id)
      this.props.showModal('showDeleteTeamModal');
    }
  }


  render() {
    const { match, teams } = this.props;
    return <div className="content-box">
      <div className="element-wrapper">
        <h6 className="element-header">Team management
          <button className="btn btn-primary pull-right" type="button"
            onClick={this.onCreateTeamClick}>Create Team</button>
        </h6>
        <div className="element-box-tp">
          {(teams && teams.length) ?
            <div className="table-responsive">
              <table className="table table-padded">
                <thead>
                  <tr>
                    <th>Teams Name</th>
                    <th>Lead</th>
                    <th className="text-center">Updated On</th>
                    <th>Status</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    _.map(teams, (team, index) => {
                      return <tr key={index}>
                        <td><div className="user-with-avatar">{team.name}</div></td>
                        <td>
                          <div className="user-with-avatar">
                            <Avatar name={team.owner.name} size="30" /> &nbsp;
                            {team.owner.name}
                          </div>
                        </td>
                        <td className="text-center">
                          <span>{datePastDayStr(team.lastUpdatedOn)}</span>
                          <span className="smaller lighter">{dateTimeStr(team.lastUpdatedOn)}</span>
                        </td>
                        <td className="nowrap">
                          <span className={"status-pill smaller " + (team.active ? 'green' : 'red')}></span>
                          <span>{(team.active ? 'Active' : 'Closed')}</span>
                        </td>
                        <td className="row-actions">
                          <Link to={match.path + "/" + team.id + "/members"}><i className="os-icon os-icon-user-male-circle"></i></Link>
                          <a href="#"><i className="os-icon os-icon-ui-44"></i></a>
                          <a className="danger" onClick={this.onDeleteTeam(team.id)}><i className="os-icon os-icon-ui-15"></i></a>
                        </td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div> : null
          }
        </div>
      </div>
    </div>
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchTeams: () => dispatch(fetchTeams()),
    createTeam: (team) => dispatch(createTeam(team)),
    showModal: (modal) => dispatch(showModal(modal)),
    modifyTeamMember: (id) => dispatch(modifyTeamMember(null, id)),
  }
}
const mapStateToProps = (state) => {
  return {
    teams: state.teamReducer.teams,
  }
}
export const TeamsListPage = connect(mapStateToProps, mapDispatchToProps)(TeamListUnwrapped)