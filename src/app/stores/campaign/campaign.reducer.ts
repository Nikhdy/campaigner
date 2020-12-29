import {
    UPDATE_FILTER,
    FETCH_CAMPAIGNS_SUCCESS,
    FETCH_CAMPAIGNS_ERROR,
    FETCH_CAMPAIGN_SUCCESS,
    FETCH_CAMPAIGN_ERROR,
    FETCH_CAMPAIGN,
    FETCH_CAMPAIGNS,
    MODIFY_CAMPAIGN,
    EDIT_DRIPS
} from './campaign.action';
import { apiSuccess, apiFailure } from '../../utils';
import * as _ from 'lodash';
import { getCampaignIndexByuIdSelector } from './campaign.selector';
import { updateObjectAtIndex } from '../../utils';
interface ICampaignReducer {
    campaigns: Campaign.IColdCampaign[];
    loaded: boolean;
    campaignLoadedById: { uid: string, loaded: boolean }[];
    campaignuId: string | null;
    isLoading: boolean;
    filter: any;
}


const initialState: ICampaignReducer = {
    campaigns: [],
    loaded: false,
    campaignLoadedById: [],
    campaignuId: null,
    isLoading: false,
    filter: {},
};
const campaignReducer = (state: ICampaignReducer = initialState, action) => {
    switch (action.type) {
        case FETCH_CAMPAIGNS:
            return { ...state, isLoading: true }
        case FETCH_CAMPAIGNS_SUCCESS:
            return { ...state, campaigns: _.cloneDeep(action.payload), loaded: true, isLoading: false };
        case FETCH_CAMPAIGNS_ERROR:
            return { ...state, campaigns: [], loaded: false, isLoading: false };
        case FETCH_CAMPAIGN:
            return { ...state, campaignuId: action.payload, isLoading: !!action.payload };
        case FETCH_CAMPAIGN_SUCCESS:
            return {
                ...state, campaigns: updateArrayAtId(state, action.payload),
                isLoading: false,
                campaignLoadedById: state.campaignLoadedById.concat([{ uid: action.payload.uid, loaded: true }])
            };
        case FETCH_CAMPAIGN_ERROR:
            return { ...state, isLoading: false };
        case UPDATE_FILTER:
            return { ...state, filter: { ...state.filter, [action.payload.key]: action.payload.value } };
        case MODIFY_CAMPAIGN:
            return { ...state, campaignuId: action.payload };
        case apiSuccess(EDIT_DRIPS):
            // make SAGA
            const campaignIndex = getCampaignIndexByuIdSelector(state);
            let campaigns = [...state.campaigns];
            if (action.payload.editIndex > state.campaigns[campaignIndex].drips.length) {
                campaigns[campaignIndex].drips.push(action.payload.drip)
            } else {
                campaigns[campaignIndex].drips = updateObjectAtIndex(campaigns[campaignIndex].drips, action.payload.editIndex, action.payload.drip)
            }
            return { ...state, campaigns }
        default:
            return state;
    }
};

export default campaignReducer;
function updateArrayAtId(state, payload) {
    const index = _.findIndex(state.campaigns, (campaign) => campaign.id === payload.id);
    const length = state.campaigns.length;
    return index > -1 ? state.campaigns.map(campaign => (campaign.id === payload.id) ? payload : campaign) : state.campaigns.concat(payload);
}

function updateFilterObj(filter, payload) {
    const updatedFilter = filter[payload.key] = payload.value;
    return updatedFilter;
}