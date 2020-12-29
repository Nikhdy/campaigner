import * as React from 'react';
import { Form } from '../../shared/form';
import { Modal } from '../../shared/modal/modal';
import { Input, Dropdown } from 'app/shared/form/field-types';
import { connect } from 'react-redux';

interface IInviteMemberProps {
  onSubmit: (values) => void;
  member?: any;
}

class InviteMember extends React.Component<IInviteMemberProps, null>{

  onSubmitMember = (values) => {
    this.props.onSubmit(values);
  }
  validateForm = (values: Form.IFormValues) => {
    let errors: Form.IFormErrors = {};

    return errors;
  }

  render() {
    const options = [{ id: "OWNER", name: "Owner" }, { id: "MEMBER", name: "Member" }];
    const { member } = this.props;
    return <Modal size="md">
      <Form onSubmit={this.onSubmitMember} validateDefs={this.validateForm} >
        <Input name="name"
          label="Name"
          placeholder="" />
        <Input name="email"
          label="Email"
          placeholder="abc@xyz.com" />
        <Dropdown
          name="role"
          label="Role"
          options={options}
        />
      </Form>
        <button type="submit" className="btn btn-primary">{member ? 'Edit' : 'Invite'}</button>
    </Modal>
  }
}
const mapStateToProps = (state) => ({
  member: state.teamReducer.member,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(InviteMember)