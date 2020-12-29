import * as React from 'react';
import { Form } from '../../shared/form';
import { Modal } from '../../shared/modal/modal';
import {onRemoveMember} from '../../stores/team/team.action';
import { connect } from 'react-redux';

interface IDeleteMemberModalProps{
  onRemoveMember: ()=> void;
}
export class DeleteTeamMemberModal extends React.Component<IDeleteMemberModalProps, {}>{
  render() {
    return <Modal size="md" header="Remove member">
      <p style={{paddingBottom:'10px'}}>Are you sure you wnat to remove member from the team?</p>
         <button type="submit" className="btn btn-primary" onClick={this.props.onRemoveMember}>Remove</button>
    </Modal>
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  onRemoveMember:  ()=>{dispatch(onRemoveMember)}
})


export default connect(mapStateToProps, mapDispatchToProps)(DeleteTeamMemberModal)