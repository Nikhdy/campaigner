import { all } from 'redux-saga/effects';

import teamRoot from '../team/team.saga';
import inboxRoot from '../inbox/inbox.saga';
import campaignroot from '../campaign/campaign.saga';
import prospectroot from '../prospects/prospect.saga';
import { userLoginWatcher, userRegisterWatcher, authMeWatcher } from '../account/account.saga';

export default function* root() {
  yield all([
    userRegisterWatcher(),
    userLoginWatcher(),
    authMeWatcher(),
    prospectroot(),
    campaignroot(),
    inboxRoot(),
    teamRoot(),
  ]);
}
