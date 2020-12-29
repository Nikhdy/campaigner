import * as React from 'react';
import { connect } from 'react-redux';
import InviteMember from '../components/team/invite-member-modal';
import DeleteTeamMemberModal from '../components/team/delete-team-member';
import DeleteTeam from '../components/team/delete-team-modal';
import {CreateTeamModal} from '../components/team/create-team-modal';
import { createTeam } from 'app/stores/team/team.action';
import { showModal } from 'app/stores/application/app.action';
import DeleteCampaign from '../components/campaign/delete-campaign-modal';
import CreateCampaign from '../components/campaign/create-campaign-modal';
import AddUpdateProspect from  '../components/prospects/add-prospect-modal';
interface IApplicationModalProps {
  viewModal: string;
  showModal : (str: string)=> void;
}

class ApplicationModals extends React.Component<IApplicationModalProps, {}>{

  onSubmitMember = () => {

  }
  createNewTeam = (values) =>{
    this.closeCreateModal();
  }
  closeCreateModal = () =>{
    this.props.showModal('');
  }

  render() {
    const {viewModal} = this.props;
    return <div>
      {viewModal === 'InviteTeamMember' && <InviteMember onSubmit={this.onSubmitMember} />}
      {viewModal=== 'showCreateModal'&& <CreateTeamModal onSubmit={this.createNewTeam} />}
      {viewModal === 'deleteTeamMember' && <DeleteTeamMemberModal/>}
      {viewModal === 'showDeleteTeamModal' && <DeleteTeam/>}
      {viewModal === 'deleteCampaign' && <DeleteCampaign/>} 
      {viewModal === 'createCampaign' && <CreateCampaign/>}
      {viewModal === 'addprospect' && <AddUpdateProspect/>}
    </div>
  }

}
const mapStateToProps = (state) => ({
  viewModal: state.appReducer.viewModal
})

const mapDispatchToProps = (dispatch) => ({
  showModal: (modal) => dispatch(showModal(modal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationModals)


