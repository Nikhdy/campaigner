import * as _ from 'lodash';

export const getCampaignByuIdSelector = (state) => {
  return (state.campaignReducer.campaigns && !_.isNull(state.campaignReducer.campaignId)) ?
    _.find(state.campaignReducer.campaigns, (campaign) => campaign.uid.toString() === state.campaignReducer.campaignuId) : null;
}

export const getCampaignStats = (state) => {
  if (state.campaignReducer.camapaignId) {
    const campaign = getCampaignByuIdSelector(state);
    return campaign ? campaign.stats : null
  } else {
    return null;
  }
}

export const getCampaignByStatus = (state) => {
  const filter = state.campaignReducer.filter;
  const campaigns = state.campaignReducer.campaigns;
  if (!filter.status || filter.status === 'all') {
    return campaigns;
  } else {
    return campaigns.filter(campaign => campaign.status === filter.status)
  }
}

export const getFilteredCampaignOverallStats = (state) => {
  const filter = state.campaignReducer.filter;
  const campaigns = getCampaignByStatus(state);
  let noOfProspects = 0;
  campaigns.forEach(campaign => {
    if (campaign.stats.totalProspects) {
      noOfProspects = noOfProspects + campaign.stats.totalProspects;
    }
  });
  return { noOfCampaigns: campaigns.length, noOfProspects: noOfProspects };
}

// from redux
export const getCampaignIndexByuIdSelector = (state)=>{
  return (state.campaigns && !_.isNull(state.campaignId)) ?
  _.findIndex(state.campaigns, (campaign) => campaign.uid.toString() === state.campaignuId) : null;
}

export const getDripVariables = (state)=>{
  return state.prospectReducer.columns.map(col => ({value: col.key, displayName: col.key}));
}
