import * as React from 'react';
import { Modal } from '../../shared/modal/modal';
import { connect } from 'react-redux';
import {deleteCampaign} from '../../stores/campaign/campaign.action';
import {translate} from '../../locales';
interface IDeleteCampaignProps {
  deleteCampaign: () => void;
}
const  DeleteCampaign = (props: IDeleteCampaignProps) => <Modal header={translate("DELETE_CAMPAIGN")} size="md">
      <p style={{ paddingBottom: '5px' }}><b>{translate("DELETE_CONFIRMATION")}</b></p>
      <p style={{ paddingBottom: '5px' }}>All the campaigns settings saved will be lost.</p>
      <button type="submit" className="btn btn-primary" onClick={props.deleteCampaign}>Remove</button>
    </Modal>
 

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  deleteCampaign : () => dispatch(deleteCampaign())
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCampaign)