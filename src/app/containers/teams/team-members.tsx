import * as _ from 'lodash';
import * as React from 'react';
import Avatar from 'react-avatar';
import { connect } from 'react-redux';
import { showModal } from 'app/stores/application/app.action';

import { datePastDayStr, dateTimeStr } from 'app/utils';
import { fetchTeamMembers, modifyTeamMember } from 'app/stores/team/team.action';


interface ITeamMemberProp {
  match: any;
  teamMembers: Team.ITeamMember[];
  fetchTeamMembers: (teamId: number) => void;
  showModal: (modalName: string) => void;
  onDeleteMember: (memberId: string | number, teamId: string | number) => void;
  modifyTeamMember: (member, teamId: string | number) => void;
}

interface ITeamMemberState {
}

class TeamMembersUnwrapped extends React.Component<ITeamMemberProp, ITeamMemberState>{

  constructor(props) {
    super(props);
    this.fetchMembers = this.fetchMembers.bind(this);
  }

  componentWillMount() {
    this.fetchMembers();
  }

  fetchMembers() {
    this.props.fetchTeamMembers(this.props.match.params.teamId);
  }

  onInviteMember = () => {
    this.props.modifyTeamMember(null, this.props.match.params.teamId);
    this.props.showModal('InviteTeamMember');
  }

  onEditMemberClick = (member) => {
    return () => {
      this.props.modifyTeamMember(member, this.props.match.params.teamId);
      this.props.showModal('InviteTeamMember');

    }
  }
  onDelete = (member) => {
    return () => {
      this.props.modifyTeamMember(member, this.props.match.params.teamId);
      this.props.showModal('deleteTeamMember');
    }
  }

  render() {
    console.log(this.props);
    const { teamMembers } = this.props;
    return <div className="content-box">
      <div className="element-wrapper">
        <h6 className="element-header">Team Members
        <button className="btn btn-primary pull-right" type="button"
            onClick={this.onInviteMember}>Invite</button>
        </h6>
        <div className="element-box-tp">
          <div className="table-responsive">
            {
              (teamMembers && teamMembers.length) ? <table className="table table-padded">
                <thead>
                  <tr>
                    <th>Member Name</th>
                    <th>Email</th>
                    <th className="text-center">Member Type</th>
                    <th>Last Updated On</th>
                    <th>Status</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    _.map(teamMembers, (teamMember: Team.ITeamMember) => {
                      return <tr>
                        <td>
                          <div className="user-with-avatar">
                            <Avatar name={teamMember.account.name} size="30" /> &nbsp;
                            {teamMember.account.name}
                          </div>
                        </td>
                        <td>
                          <div className="user-with-avatar">
                            {teamMember.account.email}
                          </div>
                        </td>
                        <td className="text-center">
                          {
                            teamMember.teamMemberType === "MEMBER" ?
                              <a className="badge badge-success-inverted">Member</a> :
                              <a className="badge badge-primary-inverted">Owner</a>
                          }
                        </td>
                        <td>
                          <span>{datePastDayStr(teamMember.lastModifiedOn)}</span>
                          <span className="smaller lighter">{dateTimeStr(teamMember.lastModifiedOn)}</span>
                        </td>
                        <td className="nowrap">
                          {
                            teamMember.active ?
                              <span className="status-pill smaller green"></span> :
                              <span className="status-pill smaller red"></span>
                          }
                          {
                            teamMember.active ?
                              <span>Active</span> :
                              <span>InActive</span>
                          }
                        </td>
                        <td className="row-actions">
                          <a href="#" onClick={this.onEditMemberClick(teamMember)}>
                            <i className="os-icon os-icon-edit"></i>
                          </a>
                          {/* <a href="#">
                            // turn to chat if it exists
                            <i className="os-icon os-icon-ui-44"></i>
                          </a> */}
                          <a className="danger" href="#" onClick={this.onDelete(teamMember)}>
                            <i className="os-icon os-icon-ui-15"></i>
                          </a>
                        </td>
                      </tr>
                    })
                  }
                </tbody>
              </table> : null
            }
          </div>
        </div>

      </div>
    </div>
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchTeamMembers: (teamId: number) => dispatch(fetchTeamMembers(teamId)),
    showModal: (modal) => dispatch(showModal(modal)),
    modifyTeamMember: (member, teamId) => dispatch(modifyTeamMember(member, teamId))
  }
}
const mapStateToProps = (state) => {
  return {
    teamMembers: state.teamReducer.teamMembers,
  }
}
export const TeamMembersPage = connect(mapStateToProps, mapDispatchToProps)(TeamMembersUnwrapped)