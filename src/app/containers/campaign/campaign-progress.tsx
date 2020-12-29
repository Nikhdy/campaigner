import * as React from 'react';
import { connect } from 'react-redux';
import { getCampaignByuIdSelector } from 'app/stores/campaign/campaign.selector';
import * as _ from 'lodash';
import { Link, withRouter } from 'react-router-dom';


interface ICampaignProgressProps {
  campaign: Campaign.IColdCampaign;
  loading: boolean;
}

export class CampaignProgressUnwrapped extends React.Component<ICampaignProgressProps, {}>{

  onEditClick(drip) {
    return () => {

    }
  }
  onAddClick() {

  }

  renderDripCards= () => {

    const { campaign } = this.props;
    const drips = campaign && campaign.drips || [];
    const isNew = campaign.status ==='created';
    const dripWiseStats = campaign.stats.dripwiseStats ||[];

    if (drips.length) {
      return _.map(drips, (drip) =>
        <div key={drip.id} className="activity-box-w">
          <div className="activity-time">
            {drip.delay ? drip.delay + (drip.delay > 1 ? ' days' : ' day') : ''}
          </div>
          <div className="activity-box">
            <div className="activity-info">
              <div className="activity-role">
                {drip.dripTitle}
              </div>
              {!isNew && <strong className="activity-title">Sent: {dripWiseStats.filter(stat=> stat.dripId === drip.id).map(stat=> stat.totalSent)}</strong> }
              <strong className="activity-title" style={{ cursor: 'pointer' }}> <i className="fa fa-pencil" onClick={this.onEditClick(drip)}> &nbsp; Edit</i></strong>
            </div>
          </div>
        </div>)
    } else {
      return <div className="activity-box-w">
        <div className="activity-time">

        </div>
        <div className="activity-box">
          <div className="activity-info">
            <div className="activity-role">
              Write your first mail
            </div>
            <strong className="activity-title" style={{ cursor: 'pointer' }}> <i className="fa fa-plus" onClick={this.onAddClick}> &nbsp; CReate</i></strong>
          </div>
        </div>
      </div>;
    }
  }

  renderDrips = () => {
    const { campaign } = this.props;
    const drips = campaign && campaign.drips || [];
    return <div className="element-wrapper">
      <h6 className="element-header">
        Drips</h6>
      <div className="element-box-tp">
        <div className="activity-boxes-w">
          {this.renderDripCards()}
          {drips.length > 0 && <div className="activity-box-w">
            <div className="activity-time">
            </div>
            <div className="activity-box">
              <div className="activity-info">
                <div className="activity-role">
                </div>
                <strong className="activity-title" style={{ cursor: 'pointer' }}> <i className="fa fa-plus" onClick={this.onAddClick}> &nbsp; Add</i></strong>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  }

  renderProspects = () => {
    const { campaign } = this.props;
    const uid = campaign.uid;
    const stats = campaign && campaign.stats;

    return <div className="element-wrapper">
      <h6 className="element-header">
        Prospects</h6>
      <div className="element-box-tp">
        <div className="el-buttons-list full-width">
          <Link className="btn btn-white btn-sm" to={"/campaigns/" + uid + "/prospects"}><i className="os-icon os-icon-users"></i><span>Total Prospects:{stats.totalProspects}</span></Link>
          <Link className="btn btn-white btn-sm" to={"/campaigns/" + uid + "/prospects"}><i className="os-icon os-icon-users"></i><span>Total Sent:{stats.totalSent}</span></Link>
          <Link className="btn btn-white btn-sm" to={"/campaigns/" + uid + "/prospects"}><i className="os-icon os-icon-users"></i><span>Total Replied:{stats.totalReplied}</span></Link>
        </div>
      </div>
    </div>
  }

  renderSettings = () => {
    return <div className="element-wrapper">
      <h6 className="element-header">
        Settings</h6>
      <div className="element-box-tp">
        Campaign settings card display here
      </div>
    </div>
  }

  render() {
    const { campaign } = this.props;
    console.log(campaign);
    return <div className='content-panel hidden-mobile'>
      {this.renderDrips()}
      {this.renderProspects()}
      {this.renderSettings()}
    </div>
  }
}


const mapStateToProps = state => {
  return {
    campaign: getCampaignByuIdSelector(state),
    loading: state.campaignReducer.isLoading,
  }
}


export const CampaignProgress = connect(mapStateToProps, null)(CampaignProgressUnwrapped);
