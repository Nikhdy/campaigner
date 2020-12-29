import * as React from 'react';
import { Form } from '../../shared/form';
import { Modal } from '../../shared/modal/modal';
import { Input, Dropdown } from 'app/shared/form/field-types';
interface ICreateModalProps {
  onSubmit?: (data) => void;
}

export class CreateTeamModal extends React.Component<ICreateModalProps, {}>{

  onSubmitTeam = (values) => {
    this.props.onSubmit(values);
  }
  validateForm = (values: Form.IFormValues) => {
    let errors: Form.IFormErrors = {};

    return errors;
  }

  render() {
    const options = [{ id: "owner", name: "Owner" }, { id: "member", name: "Member" }]
    return <Modal size="md">
      <Form onSubmit={this.onSubmitTeam} validateDefs={this.validateForm} >
        <Input name="team"
          label="Team"
          placeholder="" />

        <Input name="name"
          label="Member Name"
          placeholder="" />

        <Input name="email"
          label="Invite"
          placeholder="abc@xyz.com" />

        <Dropdown
          name="role"
          label="Role"
          options={options}
        />

        <button type="submit" className="btn btn-primary">Create</button>
      </Form>
    </Modal>
  }
}




/*<div className="onboarding-modal modal fade animated show" id="onboardingSlideModal" role="dialog"
      style={{ paddingRight: '15px', display: 'block' }}>
      <div className="modal-dialog modal-centered" role="document">
        <div className="modal-content text-center">
          <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={this.props.onClose} >
            <span className="os-icon os-icon-close"></span>
          </button>
          <div className="onboarding-content with-gradient">
            this is content inside
          <Form onSubmit={this.onSubmitTeam} validateDefs={this.validateForm}>
            </Form>
          </div>

        </div>
      </div>

    </div>
    */