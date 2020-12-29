import * as React from 'react';
import { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { Campaign } from './campaign';
import { CampaignList } from './campaigns-list';
import { getCampaignByuIdSelector } from 'app/stores/campaign/campaign.selector';
import { CampaignProgress } from './campaign-progress';
import { setRoute } from 'app/stores/application/app.action';
interface ICampaignProps {
  match: any;
  campaign?: Campaign.IColdCampaign;
  loading: boolean;
  setRoute: (route: string) => void;
}

const CampaignsUnwrapped: FC<ICampaignProps> = ({ match, campaign, loading, setRoute }) => {
  useEffect(() => {
    setRoute("CAMPAIGN");
  })
  const status = campaign ? campaign.status : '';
  return <div className='content-i'>
    <div className="content-box campaign-container">
      <Switch>
        <Route exact path={match.path} component={CampaignList} />
        <Route path={match.url + '/:id'} component={Campaign} />
      </Switch>
    </div>
    {status !== '' && <CampaignProgress />}
  </div>
}

const mapDispatchToProps = dispatch => {
  return {
    setRoute: (route: string) => dispatch(setRoute(route)),
  }
}
const mapStateToProps = (state) => {
  return {
    campaign: getCampaignByuIdSelector(state),
    loading: state.campaignReducer.isLoading,
  }
}
export const Campaigns = connect(mapStateToProps, mapDispatchToProps)(CampaignsUnwrapped)