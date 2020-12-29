export const FETCH_CAMPAIGNS = 'FETCH_CAMPAIGNS';
export const FETCH_CAMPAIGNS_SUCCESS = 'FETCH_CAMPAIGNS_SUCCESS';
export const FETCH_CAMPAIGNS_ERROR = 'FETCH_CAMPAIGNS_ERROR';

export const fetchCampaigns = () => ({ type: FETCH_CAMPAIGNS });

export const FETCH_CAMPAIGN = 'FETCH_CAMPAIGN';
export const FETCH_CAMPAIGN_SUCCESS = 'FETCH_CAMPAIGN_SUCCESS';
export const FETCH_CAMPAIGN_ERROR = 'FETCH_CAMPAIGN_ERROR';

export const fetchCampaign = (campainguId: string | number | null) => ({ type: FETCH_CAMPAIGN, payload: campainguId })


export const REFRESH_CAMPAIGNS = 'REFRESH_CAMPAIGNS';

export const refreshCampaigns = () => ({ type: REFRESH_CAMPAIGNS });

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const updateFilter = (filter: any) => ({ type: UPDATE_FILTER, payload: filter });


export const DELETE_CAMPAIGN = 'DELETE_CAMPAIGN';
export const DELETE_CAMPAIGN_SUCCESS = 'DELETE_CAMPAIGN_SUCCESS';
export const DELETE_CAMPAIGN_ERROR = 'DELETE_CAMPAIGN_ERROR';

export const deleteCampaign = () => ({ type: DELETE_CAMPAIGN })

export const MODIFY_CAMPAIGN = "MODIFY_CAMPAIGN";
export const modifyCampaign = (campaignUid) => ({ type: MODIFY_CAMPAIGN, payload: campaignUid });

export const CREATE_CAMPAIGN = "CREATE_CAMPAIGN";
export const createCampaign = (values) => ({ type: CREATE_CAMPAIGN, payload: values });;




export const EDIT_DRIPS = "EDIT_DRIPS";
export const editDrips = (drip) => ({type: EDIT_DRIPS, payload: drip});

