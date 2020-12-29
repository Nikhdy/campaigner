import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { CampaignStatsComponents } from 'app/components/campaignStats/campaign-stats-component';
import { setRoute } from 'app/stores/application/app.action';

interface IDashboardProps {
  setRoute: (route: string) => void;
}

const DashboardUnwrapped: React.FC<IDashboardProps> = (props) => {
  useEffect(() => {
    props.setRoute("DASHBOARD")
  }, [])
  
  return <div className="content-box">
    <div className="row">
      <div className="col-sm-12">
        <CampaignStatsComponents />
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12">
        <div className="element-wrapper">
          <h6 className="element-header">Unique Visitors Graph</h6>
          <div className="element-box">
            <div className="os-tabs-w">
              <div className="os-tabs-controls">
                <ul className="nav nav-tabs smaller">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#tab_overview">Overview</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tab_sales">Sales</a>
                  </li>
                </ul>
                <ul className="nav nav-pills smaller d-none d-md-flex">
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#">Today</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#">7 Days</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#">14 Days</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#">Last Month</a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div className="tab-pane active" id="tab_overview">
                  <div className="el-tablo bigger">
                    <div className="label">Unique Visitors</div>
                    <div className="value">12,537</div>
                  </div>
                  <div className="el-chart-w">
                    {/* <LineChart data={chartData} options={chartOptions} width="600" height="250" /> */}
                  </div>
                </div>
                <div className="tab-pane" id="tab_sales"></div>
                <div className="tab-pane" id="tab_conversion"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
const mapDispatchToProps = dispatch => {
  return {
    setRoute: (route: string) => dispatch(setRoute(route)),
  }
}
const mapStateToProps = (state) => {
  return {

  }
}
export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardUnwrapped)