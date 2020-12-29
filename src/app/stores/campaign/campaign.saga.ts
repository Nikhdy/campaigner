import { fork, call, put, all, takeEvery } from 'redux-saga/effects';
import { fetchAllCampaigns, fetchCampaignById, saveCampaignDrip } from '../../api/campaign.api';
import { REFRESH_CAMPAIGNS, FETCH_CAMPAIGNS, FETCH_CAMPAIGN, CREATE_CAMPAIGN, EDIT_DRIPS } from './campaign.action';
import { apiSuccess, apiFailure } from '../../utils';
function* getCampaigns(action) {
    // const result = yield call(fetchAllCampaigns);
    // if (result.status === "SUCCESS") {
    //     yield put({ type: FETCH_CAMPAIGNS_SUCCESS, payload: result.data });
    // } else {
    //     // yield put({ type: FETCH_CAMPAIGNS_ERROR, payload: "Failed to load data" });
    //     yield put({ type: FETCH_CAMPAIGNS_SUCCESS, payload: data });
    // }
    yield put({ type: apiSuccess(action.type), payload: data });
}

function* refetchCampaigns(action) {
    // const result = yield call(fetchAllCampaigns);
    // if (result.status === "SUCCESS") {
    //     yield put({ type: FETCH_CAMPAIGNS_SUCCESS, payload: result.data });
    // } else {
    //     // yield put({ type: FETCH_CAMPAIGNS_ERROR, payload: "Failed to load data" });
    //     yield put({ type: FETCH_CAMPAIGNS_SUCCESS, payload: data });
    // }
    yield put({ type: apiSuccess(action.type), payload: data });
}

function* getCampaignById(action) {
    //  if (action.payload) {
    // const result = yield call(fetchCampaignById, action.payload);
    // if (result.status === "SUCCESS") {
    //     yield put({ type: FETCH_CAMPAIGN_SUCCESS, payload: result.data });
    // } else {
    //     // yield put({ type: FETCH_CAMPAIGN_ERROR, payload: "Failed to load data" });\
    //     yield put({ type: FETCH_CAMPAIGN_SUCCESS, payload: campaignData.filter(campaign => campaign.uid === action.payload)[0] });
    // }
    // }
    if (action.payload) {
        yield put({ type: apiSuccess(action.type), payload: campaignData.filter(campaign => campaign.uid === action.payload)[0] });
    }
}

function* saveDrip(action){
    //  if (action.payload) {
    // const result = yield call(saveCampaignDrip, action.payload);
    // if (result.status === "SUCCESS") {
    //     yield put({ type: FETCH_CAMPAIGN_SUCCESS, payload: result.data });
    // } else {
    //     // yield put({ type: FETCH_CAMPAIGN_ERROR, payload: "Failed to load data" });\
    //     yield put({ type: FETCH_CAMPAIGN_SUCCESS, payload: campaignData.filter(campaign => campaign.uid === action.payload)[0] });
    // }
    // }
    if (action.payload) {
        yield put({ type: apiSuccess(action.type), payload: action.payload });
    }
}


function* createNewCampaign(action) {
    // api call to new campaign and create success
}

export function* getCampaignsWatcher() {
    yield takeEvery(FETCH_CAMPAIGNS, getCampaigns)
}

export function* refetchCampaignsWatcher() {
    yield takeEvery(REFRESH_CAMPAIGNS, refetchCampaigns)
}

export function* getCampaignByIdWatcher() {
    yield takeEvery(FETCH_CAMPAIGN, getCampaignById)
}
export function* createCampaignWatcher() {
    yield takeEvery(CREATE_CAMPAIGN, createNewCampaign)
}

export function* saveEditedDrip(){
    yield takeEvery(EDIT_DRIPS, saveDrip)
}

export default function* campaignroot() {
    yield all([getCampaignsWatcher(), getCampaignByIdWatcher(), refetchCampaignsWatcher(), saveEditedDrip()])
}



// const data: Campaign.IGeneralCampaignInfo[] = [{
const data: any[] = [{
    id: 0,
    uid: '1as234jfkqw234',
    name: 'Frost Campaign',
    status: 'running',
    //type: 'coldemail_campaign',
    ownerName: 'Nikhil',
    ownerEmail: 'nikhil.reddy132@gmail.com',
    createdOn: 1529987107222,
    lastModifiedOn: 1529987107222,
    drips: [],
    stats: {
        totalProspects: 200000,
        totalSent: 155000,
        totalSeen: 90200,
        totalReplied: 42300,
    }
}, {
    id: 1,
    uid: '1as23jfkdad234',
    name: 'Mail Campaign',
    status: 'completed',
    //type: 'coldemail_campaign',
    ownerName: 'Nikhil',
    ownerEmail: 'nikhil.reddy132@gmail.com',
    createdOn: 1529987107222,
    lastModifiedOn: 1529987107222,
    drips: [],
    stats: {
        totalProspects: 200000,
        totalSent: 200000,
        totalSeen: 15200,
        totalReplied: 803024,
    }
}, {
    id: 2,
    uid: '1as23fsjfkdad234',
    name: 'Adil Campaign',
    status: 'paused',
    //type: 'coldemail_campaign',
    ownerName: 'Nikhil',
    ownerEmail: 'nikhil.reddy132@gmail.com',
    createdOn: 1529987107222,
    lastModifiedOn: 1529987107222,
    drips: [],
    stats: {
        totalProspects: 200000,
        totalSent: 155000,
        totalSeen: 90200,
        totalReplied: 42300,
    }
}, {
    id: 3,
    uid: '1as234jsdsw234',
    name: 'Chump Campaign',
    status: 'created',
    //type: 'coldemail_campaign',
    ownerName: 'Nikhil',
    ownerEmail: 'nikhil.reddy132@gmail.com',
    createdOn: 1529987107222,
    lastModifiedOn: 1529987107222,
    drips: [],
    stats: {
    }
}];




// const campaignData: Campaign.IGeneralCampaignInfo[] = [{
const campaignData: Campaign.IColdCampaign[] = [{
    id: 0,
    uid: '1as234jfkqw234',
    name: 'Frost Campaign',
    status: 'running',
    createdOn: new Date().getTime(),
    ownerId: '123kasd',
    ownerName: 'Nikhil',
    ownerEmail: 'nikhil@gmail.com',
    drips: [
        {
            dripTitle: 'First Mail',
            subject: 'Instagram',
            body: '<p>Hi {{firstName}}</p><p> der i had gone through your instagram dp. If you got a minute i would like to talk about a product that would work in tandem with your software</p>',
            delay: 0,
            id: 'ajlnlan3lal1203042',
            type: 'email'
        },
        {
            dripTitle: 'Follow-Up',
            subject: 'Reminder instagram',
            body: '<p>Hi {{firstName}} i had gone through your instagram dp</p>',
            delay: 2,
            id: 'ajlnlanclal1203042',
            type: 'email'
        }
    ],
    stats: {
        totalProspects: 200000,
        currentProspects: 200000,
        totalSent: 50000,
        totalOpened: 9,
        totalReplied: 6,
        currentOptedOut: 2,
        currentToCheck: 1,
        currentFailedEmailValidation: 0,
        currentBounced: 0,
        currentCompleted: 4,
        currentInProgress: 5,
        currentPaused: 2,
        currentUnsentProspects: 5,
        totalSteps: 3,
        dripwiseStats: [{
            dripId: 'ajlnlan3lal1203042',
            totalSent: 50000,
            totalSeen: 24032,
            totalReplied: 12456,
            prospectInDrip: 150000,
        }, {
            dripId: 'ajlnlanclal1203042',
            totalSent: 25000,
            totalSeen: 6789,
            totalReplied: 12456,
            prospectInDrip: 25000,
        }]
    }

}, {
    id: 1,
    uid: '1as23jfkdad234',
    name: 'Hot Campaign',
    status: 'completed',
    createdOn: new Date().getTime(),
    ownerId: '123kasd',
    ownerName: 'Nikhil',
    ownerEmail: 'nikhil@gmail.com',
    drips: [
        {
            dripTitle: 'First Mail',
            subject: 'Instagram',
            body: '<p>Hi {{firstName}}</p><p> der i had gone through your instagram dp. If you got a minute i would like to talk about a product that would work in tandem with your software</p>',
            delay: 0,
            id: 'ajlnlanclal120',
            type: 'email'
        },
        {
            dripTitle: 'Follow-Up',
            subject: 'Reminder instagram',
            body: '<p>Hi {{firstName}} der i had gone through your instagram dp</p>',
            delay: 2,
            id: 'ajlnlanclal1203042',
            type: 'email'
        }
    ],
    stats: {
        totalProspects: 200000,
        currentProspects: 20,
        totalSent: 200000,
        totalOpened: 9,
        totalReplied: 6,
        currentOptedOut: 2,
        currentToCheck: 1,
        currentFailedEmailValidation: 0,
        currentBounced: 0,
        currentCompleted: 4,
        currentInProgress: 5,
        currentPaused: 2,
        currentUnsentProspects: 5,
        totalSteps: 3,
        dripwiseStats: [{
            dripId: 'ajlnlanclal120',
            totalSent: 200000,
            totalSeen: 150034,
            totalReplied: 90000,
            prospectInDrip: 0,
        }, {
            dripId: 'ajlnlanclal1203042',
            totalSent: 110000,
            totalSeen: 67890,
            totalReplied: 52456,
            prospectInDrip: 0,
        }]
    }

}, {
    id: 2,
    uid: '1as23fsjfkdad234',
    name: 'Promotional Campaign',
    status: 'paused',
    createdOn: new Date().getTime(),
    ownerId: '123kasd',
    ownerName: 'Nikhil',
    ownerEmail: 'nikhil@gmail.com',
    drips: [
        {
            dripTitle: 'First Mail',
            subject: 'Instagram',
            body: '<p>Hi {{firstName}}</p><p> der i had gone through your instagram dp. If you got a minute i would like to talk about a product that would work in tandem with your software</p>',
            delay: 0,
            id: 'ajlnlanclal1203042',
            type: 'email'
        },
        {
            dripTitle: 'Follow-Up',
            subject: 'Reminder instagram',
            body: '<p>Hi {{firstName}} der i had gone through your instagram dp</p>',
            delay: 2,
            id: 'ajlnlanclal12030',
            type: 'email'
        },
        {
            dripTitle: 'Follow-Up',
            subject: 'Still Intrested',
            body: '<p>Hi, ther has been no response from you this wil be the last email let me know if u ae interested please contact me on xyz@gmail.com</p>',
            delay: 2,
            id: 'ajlnlanclal120304',
            type: 'email'
        }
    ],
    stats: {
        totalProspects: 200000,
        currentProspects: 200000,
        totalSent: 50000,
        totalOpened: 9,
        totalReplied: 6,
        currentOptedOut: 2,
        currentToCheck: 1,
        currentFailedEmailValidation: 0,
        currentBounced: 0,
        currentCompleted: 4,
        currentInProgress: 5,
        currentPaused: 2,
        currentUnsentProspects: 5,
        totalSteps: 3,
        dripwiseStats: [{
            dripId: 'ajlnlanclal1203042',
            totalSent: 50000,
            totalSeen: 24032,
            totalReplied: 12456,
            prospectInDrip: 150000,
        }, {
            dripId: 'ajlnlanclal12030',
            totalSent: 25000,
            totalSeen: 6789,
            totalReplied: 12456,
            prospectInDrip: 25000,
        }, {
            dripId: 'ajlnlanclal120304',
            totalSent: 25000,
            totalSeen: 6789,
            totalReplied: 12456,
            prospectInDrip: 25000,
        }]
    }
}, {
    id: 3,
    uid: '1as234jsdsw234',
    name: 'Chump Campaign',
    status: 'created',
    //type: 'coldemail_campaign',
    ownerId: '123kasd',
    ownerName: 'Nikhil',
    ownerEmail: 'nikhil.reddy132@gmail.com',
    createdOn: 1529987107222,
    lastModifiedOn: 1529987107222,
    drips: [{
        dripTitle: 'First Mail',
        subject: 'Instagram',
        body: '<p>Hi {{firstName}}</p><p> der i had gone through your instagram dp. If you got a minute i would like to talk about a product that would work in tandem with your software</p>',
        delay: 0,
        id: 'ajlnlanclal1203042',
        type: 'email'
    }],
    stats: {
    }
}];