import * as React from 'react';
import {connect} from 'react-redux';
import {getFilteredCampaignOverallStats} from 'app/stores/campaign/campaign.selector';
import {translate} from 'app/locales';
interface IOverAllColdCampaignStatsProps{
    filterStats: any;
    loading: boolean;
}

class OverAllColdCampaignStatsUnwrapped extends React.Component<IOverAllColdCampaignStatsProps,{}> {

    displayNumber(val: number){
        return val> 1000 ? Math.round(val/1000)+'K': val;
    }
    render() {
        const {filterStats} = this.props;
        return <div className="col-md-5" >
                <div className="element-wrapper">
                    <div className="element-box">
                        <div className="padded m-b">
                            <div className="centered-header">
                                <h6>{translate('CAMPAIGN_STATISTICS')}</h6>
                            </div>
                            <div className="row">
                                <div className="col-6 b-r b-b">
                                    <div className="el-tablo centered padded-v-big highlight bigger">
                                        <div className="label">{translate("CAMPAIGNS")}</div>
                                        <div className="value">{filterStats.noOfCampaigns}</div>
                                    </div>
                                </div>
                                <div className="col-6 b-b">
                                    <div className="el-tablo centered padded-v-big highlight bigger">
                                        <div className="label">{translate("PROSPECTS")}</div>
                                        <div className="value">{this.displayNumber(filterStats.noOfProspects)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="padded m-b">
                            <div className="centered-header">
                                <h6>{translate("PROGRESS")}</h6>
                            </div>
                            <div className="os-progress-bar primary">
                                <div className="bar-labels">
                                    <div className="bar-label-left">
                                        <span>Progress</span><span className="positive">+12</span>
                                    </div>
                                    <div className="bar-label-right">
                                        <span className="info">72/100</span>
                                    </div>
                                </div>
                                <div className="bar-level-1" style={{ width: "100%" }}>
                                    <div className="bar-level-2" style={{ width: "72%" }}>
                                        <div className="bar-level-3" style={{ width: "25%" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="os-progress-bar primary">
                                <div className="bar-labels">
                                    <div className="bar-label-left">
                                        <span>Progress</span><span className="negative">-5</span>
                                    </div>
                                    <div className="bar-label-right">
                                        <span className="info">54/100</span>
                                    </div>
                                </div>
                                <div className="bar-level-1" style={{ width: "100%" }}>
                                    <div className="bar-level-2" style={{ width: "54%" }}>
                                        <div className="bar-level-3" style={{ width: "25%" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="os-progress-bar primary">
                                <div className="bar-labels">
                                    <div className="bar-label-left">
                                        <span>Progress</span><span className="positive">+5</span>
                                    </div>
                                    <div className="bar-label-right">
                                        <span className="info">86/100</span>
                                    </div>
                                </div>
                                <div className="bar-level-1" style={{ width: "100%" }}>
                                    <div className="bar-level-2" style={{ width: "86%" }}>
                                        <div className="bar-level-3" style={{ width: "25%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    }
}



const mapStateToProps = (state) => {
    return {
        filterStats: getFilteredCampaignOverallStats(state),
        loading: state.campaignReducer.loading,
    };
};


export const OverAllColdCampaignStats = connect(mapStateToProps)(OverAllColdCampaignStatsUnwrapped);