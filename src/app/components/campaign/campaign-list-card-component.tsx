import * as React from 'react';
import { translate } from 'app/locales';
interface ICampaignListCardProps {
  campaign: Campaign.IColdCampaign;
  onClick: (uid: string) => () => void;
  onDelete: (uid: string | number ) => void;
}

export class CampaignListCard extends React.Component<ICampaignListCardProps, {}>{

  getProgressBarStats(stats: Campaign.ICamapignStats) {

    const statsPercentage = stats.totalProspects ? [stats.totalSent / stats.totalProspects * 100
      , stats.totalSeen / stats.totalProspects * 100
      , stats.totalReplied / stats.totalProspects * 100] : [0, 0, 0];
    return statsPercentage;
  }
  onEditClick() {

  }
  onCopyClick() {

  }
  onDeleteClick=()=> {
    this.props.onDelete(this.props.campaign.uid)
  }
  displayNumber(val: number) {
    return val > 1000 ? Math.round(val / 1000) + 'K' : val;
  }

  render() {
    const { campaign, onClick } = this.props;
    const campaignStats = this.getProgressBarStats(campaign.stats);
    return <div className="project-box">
      <div className="project-head">
        <div className="project-title">
          <h5>
            {campaign.name}
          </h5>
        </div>
        <div className="project-users row-actions">
          <a><i className="os-icon os-icon-pencil-2" onClick={onClick(campaign.uid)}></i></a>
          <a href="javascript:void(0)"><i className="fa fa-copy" onClick={this.onCopyClick}></i></a>
          <a className="danger" href="javascript:void(0)"><i className="os-icon os-icon-ui-15" onClick={this.onDeleteClick}></i></a>
        </div>
      </div>
      <div className="project-info">
        <div className="row align-items-center">
          <div className="col-sm-5">
            <div className="row">
              <div className="col-4">
                <div className="el-tablo highlight">
                  <div className="label">
                    {translate("SENT")}
                  </div>
                  <div className="value">
                    {this.displayNumber(campaign.stats.totalSent || 0)}
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="el-tablo highlight">
                  <div className="label">
                    {translate("SEEN")}
                  </div>
                  <div className="value">
                    {this.displayNumber(campaign.stats.totalSeen || 0)}
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="el-tablo highlight">
                  <div className="label">
                    {translate("REPLIED")}
                  </div>
                  <div className="value">
                    {this.displayNumber(campaign.stats.totalReplied || 0)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-5 offset-sm-2">
            <div className="os-progress-bar primary">
              <div className="bar-labels">
                <div className="bar-label-left">
                  <span>{translate("PROGRESS")}</span>
                  {/* <span className="positive"></span> */}
                </div>
                <div className="bar-label-right">
                  <span className="info">{campaign.stats.totalSent || 0}/{campaign.stats.totalProspects || 0}</span>
                </div>
              </div>
              <div className="bar-level-1" style={{ width: '100%' }}>
                <div className="bar-level-2" style={{ width: campaignStats[0] + '%' }}>
                  <div className="bar-level-4" style={{ width: campaignStats[1] + '%' }}>
                    <div className="bar-level-3" style={{ width: campaignStats[2] + '%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}