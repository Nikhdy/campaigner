import * as React from 'react';
import { Modal } from '../../shared/modal/modal';
import { deleteTeam } from '../../stores/team/team.action';
import { connect } from 'react-redux';

interface IDeleteTeamProps {
  deleteTeam: () => void;
}
 class DeleteTeam extends React.Component<IDeleteTeamProps, {}> {
  render() {
    return <Modal header= {"Delete Team"} size="md">
      <p style={{ paddingBottom: '5px' }}><b>Are you sure you wnat to delete team?</b></p>
      <p style={{ paddingBottom: '5px' }}>previously saved data could be lost or transfer to another team.</p>
      <button type="submit" className="btn btn-primary" onClick={this.props.deleteTeam}>Remove</button>
    </Modal>
  }

}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  deleteTeam: () => { dispatch(deleteTeam) }
})


export default connect(mapStateToProps, mapDispatchToProps)(DeleteTeam)