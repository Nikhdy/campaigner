import * as React from 'react';
import { connect } from 'react-redux';
import { fetchCampaigns, refreshCampaigns, updateFilter, fetchCampaign } from 'app/stores/campaign/campaign.action';
import { getCampaignByStatus } from 'app/stores/campaign/campaign.selector';
import { VisualTable } from 'app/shared/table';
import { CampaignListCard } from 'app/components/campaign/campaign-list-card-component';
import { OverAllColdCampaignStats } from 'app/components/campaign/campaign-overall-stats';
import { translate } from 'app/locales';
import * as moment from 'moment';
import { showModal } from 'app/stores/application/app.action';
import { modifyCampaign } from 'app/stores/campaign/campaign.action';
import Tabs from 'app/shared/tabs';
interface ICampaignListProps {
  fetchCampaigns: () => void;
  campaigns: Campaign.IColdCampaign[];
  history: any;
  refreshCampaigns: () => void;
  updateFilter: (filter) => void;
  filter: any;
  showModal: (modal: string) => void;
  modifyCampaign: (campaignUid: string | number) => void;
}
// interface ICampaignListState {
//     activeTab: string;
// }

class CamplaignListUnwrapped extends React.Component<ICampaignListProps>{


  campaignStatusTabs: { name: string, key: string, displayName: string }[] = [
    { name: 'all', key: 'all', displayName: translate('ALL') },
    { name: 'created', key: 'created', displayName: translate('NOT_STARTED') },
    { name: 'running', key: 'running', displayName: translate('RUNNING') },
    { name: 'paused', key: 'paused', displayName: translate('PAUSED') },
    { name: 'completed', key: 'completed', displayName: translate('COMPLETED') },
  ];
  constructor(props) {
    super(props);
    this.onRefreshClick = this.onRefreshClick.bind(this);
    this.onTabClick = this.onTabClick.bind(this);
    this.onCampaignClick = this.onCampaignClick.bind(this);
  }
  componentWillMount() {
    this.props.updateFilter({ key: 'status', value: 'all' });
    this.props.fetchCampaigns();
  }


  campaignFormatter(val, row) {
    return <div><div className="campaignName">{val}</div>
      <div className="campaignEmail"><label className="ui default header">Email:  </label>
        {row.ownerEmail}</div>
      <div className={"description" + (row.status === 'running' ? ' text-success' : '')}>
        <i className="fa fa-circle"></i>
        Created on <span className="semibold">{
          moment(row.createdOn).format('DD MMM, YYYY')}</span> by<span className="semibold">{row.ownerName}</span>
      </div>
    </div>
  }

  campaignActionFormatter(val, row) {
    return <div>
      <a href="javascript:void(0)"><i className="os-icon os-icon-grid-10"></i></a><a href="javascript:void(0)"><i className="os-icon os-icon-ui-44"></i></a><a className="danger" href="javascript:void(0)"><i className="os-icon os-icon-ui-15"></i></a>
    </div>

  }
  campaignStatusFormatter(val, row) {
    if (val === 'running') {
      return <span className='badge badge-success-inverted'>{translate("RUNNING")}</span>
    } else if (val === 'created') {
      return <span className='badge badge-primary-inverted'>{translate("CREATED")}</span>
    } else if (val === 'paused') {
      return <span className='badge badge-warning-inverted'>{translate("PAUSED")}</span>
    } else {
      return <span className='badge badge-danger-inverted'>{translate("STOPPED")}</span>
    }
  }

  onRefreshClick() {
    this.props.refreshCampaigns();
  }

  onTabClick = (name: string) => {
    return () => { this.props.updateFilter({ key: 'status', value: name }) };
  }
  onCampaignClick(uid: string) {
    return () => {
      this.props.history.push("/campaigns/" + uid)
    }
  }
  onCampaignDelete = (uid) => {
    // save Uid in campaign store
    this.props.modifyCampaign(uid);
    this.props.showModal('deleteCampaign');
  }
  onCreateClick = () => {
    this.props.showModal('createCampaign');
  }


  render() {
    const { campaigns, filter } = this.props;
    const status = filter.status || 'all';
    return <div className="row">
      <div className="col-md-12">
        <Tabs options={this.campaignStatusTabs} onTabClick={this.onTabClick} currentTab={status}>
          <div className="nav nav-pills smaller d-none d-lg-flex">
            <button className="button-icon" onClick={this.onCreateClick}>
              <i className="os-icon os-icon-plus"></i>
            </button>

            <button className="button-icon" onClick={this.onRefreshClick}>
              <i className="os-icon os-icon-grid-18"></i>
            </button>
          </div>
        </Tabs>
        
        <div className="row">
          <div className={"col-md-7 text-reduced-size"}>
            <div className="projects-list">
              {campaigns.map(campaign => <CampaignListCard campaign={campaign} key={campaign.uid} onClick={this.onCampaignClick} onDelete={this.onCampaignDelete} />)}
            </div>
          </div>
          <OverAllColdCampaignStats />
        </div>
      </div>
    </div>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCampaigns: () => dispatch(fetchCampaigns()),
    refreshCampaigns: () => dispatch(refreshCampaigns()),
    updateFilter: (filter) => dispatch(updateFilter(filter)),
    showModal: (val: string) => dispatch(showModal(val)),
    modifyCampaign: (uid: string) => dispatch(modifyCampaign(uid)),
  }
}

const mapStateToProps = (state) => {
  return {
    campaigns: getCampaignByStatus(state),
    loading: state.campaignReducer.loading,
    filter: state.campaignReducer.filter,
  };
};


export const CampaignList = connect(mapStateToProps, mapDispatchToProps)(CamplaignListUnwrapped);

