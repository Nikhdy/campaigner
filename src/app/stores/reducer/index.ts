import { combineReducers } from 'redux';
import teamReducer from '../team/team.reducer';
import inboxReducer from '../inbox/inbox.reducer';
import appReducer from '../application/app.reducer';
import accountReducer from '../account/account.reducer';
import campaignReducer from '../campaign/campaign.reducer';
import prospectReducer from '../prospects/prospect.reducer';

const  reducer = combineReducers({
  appReducer,
  teamReducer,
  inboxReducer,
  accountReducer,
  campaignReducer,
  prospectReducer
});

export default reducer;