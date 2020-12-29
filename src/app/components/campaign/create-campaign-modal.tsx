import * as React from 'react';
import { Modal } from '../../shared/modal/modal';
import { translate } from '../../locales';
import { connect } from 'react-redux';
import { Form } from '../../shared/form';
import { Input } from '../../shared/form/field-types';
import {createCampaign} from '../../stores/campaign/campaign.action';
interface ICreateCampaignProps {
  createCampaign: (values) => void;
}


class CreateCampaign extends React.Component<ICreateCampaignProps, {}>{
  onSubmit = (values: Form.IFormValues) => {
    this.props.createCampaign(values);
  }
  onValidate = (values: Form.IFormValues) => {
    let errors: Form.IFormErrors = {};

    return errors;
  }

  render() {
    return <Modal header={translate('CREATE_CAMPAIGN', 'create campaign')} size="md">
      <Form onSubmit={this.onSubmit} validateDefs={this.onValidate}>
        <Input name="campaign" label={translate("CAMPAIGN")} placeholder={translate("CAMPAIGN")} />
      </Form>
      <button type="submit" className="btn btn-primary">Create</button>
    </Modal>
  }
}


const mapDispathToProps = (dispatch) => ({
  createCampaign :(values) => dispatch(createCampaign(values))
})


export default connect(null, mapDispathToProps)(CreateCampaign);