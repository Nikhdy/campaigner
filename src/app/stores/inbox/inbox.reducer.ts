import { FETCH_INBOX, FETCH_INBOX_SUCCESS, FETCH_INBOX_ERROR } from './inbox.action';
import * as _ from 'lodash';
const initialState = {
  campaigns: [],
  loaded: false,
  campaignId: null,
  isLoading: false,
};
const inboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INBOX:
      return { ...state, isLoading: true }
    case FETCH_INBOX_SUCCESS:
      return { ...state, inbox: _.cloneDeep(action.payload), loaded: true, isLoading: false };
    case FETCH_INBOX_ERROR:
      return { ...state, inbox: [], loaded: false, isLoading: false };
    default:
      return state;
  }
};

export default inboxReducer;
