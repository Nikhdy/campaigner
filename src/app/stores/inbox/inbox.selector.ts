import * as _ from 'lodash';

export const getCampaignByIdSelector = (state) => {
  return (state.campaignReducer.campaigns && !_.isNull(state.campaignReducer.campaignId)) ?
    _.find(state.campaignReducer.campaigns, (campaign) => campaign.id.toString() === state.campaignReducer.campaignId) : null;
}

export const getCampaignStats = (state) => {
  if (state.campaignReducer.camapaignId) {
    const campaign = getCampaignByIdSelector(state);
    return campaign ? campaign.stats : null
  } else {
    return null;
  }
}