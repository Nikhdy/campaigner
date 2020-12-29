import * as React from 'react';
import { connect } from 'react-redux';
interface ICampaignStatsProps {
    //campaignStats: Campaign.ICampaignStats
    campaignStats: any
}
interface ICampaignStatsState {

}

class CampaignStats extends React.Component<ICampaignStatsProps, ICampaignStatsState>{

    render(){
        return  <div className="element-wrapper">
            <div className="element-actions">
              <form className="form-inline justify-content-sm-end">
                <select className="form-control form-control-sm rounded">
                  <option value="Pending">
                    Today
                  </option>
                  <option value="Active">
                    Last Week
                  </option>
                  <option value="Cancelled">
                    Last 30 Days
                  </option>
                </select>
              </form>
            </div>
            <h6 className="element-header">
              Sales Dashboard
            </h6>
            <div className="element-content">
              <div className="row">
                <div className="col-sm-4 col-xxxl-3">
                  <a className="element-box el-tablo" href="#">
                    <div className="label">
                      Products Sold
                    </div>
                    <div className="value">
                      57
                    </div>
                    <div className="trending trending-up-basic">
                      <span>12%</span><i className="os-icon os-icon-arrow-up2"></i>
                    </div>
                  </a>
                </div>
                <div className="col-sm-4 col-xxxl-3">
                  <a className="element-box el-tablo" href="#">
                    <div className="label">
                      Gross Profit
                    </div>
                    <div className="value">
                      $457
                    </div>
                    <div className="trending trending-down-basic">
                      <span>12%</span><i className="os-icon os-icon-arrow-down"></i>
                    </div>
                  </a>
                </div>
                <div className="col-sm-4 col-xxxl-3">
                  <a className="element-box el-tablo" href="#">
                    <div className="label">
                      New Customers
                    </div>
                    <div className="value">
                      125
                    </div>
                    <div className="trending trending-down-basic">
                      <span>9%</span><i className="os-icon os-icon-arrow-down"></i>
                    </div>
                  </a>
                </div>
                <div className="d-none d-xxxl-block col-xxxl-3">
                  <a className="element-box el-tablo" href="#">
                    <div className="label">
                      Refunds Processed
                    </div>
                    <div className="value">
                      $294
                    </div>
                    <div className="trending trending-up-basic">
                      <span>12%</span><i className="os-icon os-icon-arrow-up2"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
    }

}

const mapDispatchToProps = dispatch => {
    return {

    }
}
const mapStateToProps = (state) => {
    return {
        // campaignStats: 
    }
}


export const CampaignStatsComponents = connect(mapStateToProps, mapDispatchToProps)(CampaignStats);

