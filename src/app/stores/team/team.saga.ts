import { fork, call, put, all, takeEvery } from 'redux-saga/effects';

import { getTeams, getTeamMembers } from 'app/api/team.api';
import {
  FETCH_TEAMS, FETCH_TEAMS_SUCCESS, FETCH_TEAMS_ERROR,
  FETCH_TEAM_MEMBERS, FETCH_TEAM_MEMBERS_SUCCESS, FETCH_TEAM_MEMBERS_ERROR,
  CREATE_TEAM, CREATE_TEAM_ERROR, CREATE_TEAM_SUCCESS,
  INVITE_MEMBER, INVITE_MEMBER_ERROR, INVITE_MEMBER_SUCCESS
} from './team.action';

function* fetchTeams() {
  const result = yield call(getTeams);
  console.log("Result", result)
  if (result.status === "SUCCESS") {
    yield put({ type: FETCH_TEAMS_SUCCESS, payload: result.data });
  } else {
    yield put({ type: FETCH_TEAMS_ERROR, payload: "Failed to load data" });
  }
}

function* fetchTeamMembers(teamId) {
  const result = yield call(getTeamMembers, teamId);
  console.log("Result", result)
  if (result.status === "SUCCESS") {
    yield put({ type: FETCH_TEAM_MEMBERS_SUCCESS, payload: result.data });
  } else {
    yield put({ type: FETCH_TEAM_MEMBERS_ERROR, payload: teamMembers });
  }
}

function* createTeam(action) {

  yield put({ type: CREATE_TEAM_SUCCESS, payload: createNewTeamObj(action.payload) })
}

function* inviteTeamMember(action) {
  yield put({ type: INVITE_MEMBER_SUCCESS, payload: createNewMember(action.payload.member) })
}

export function* inviteMemberWatcher() {
  yield takeEvery(INVITE_MEMBER, inviteTeamMember);
}

export function* createTeamWatcher() {
  yield takeEvery(CREATE_TEAM, createTeam)
}

export function* getTeamWatcher() {
  yield takeEvery(FETCH_TEAMS, fetchTeams);
}

export function* getTeamMemebersWatcher() {
  yield takeEvery(FETCH_TEAM_MEMBERS, fetchTeamMembers);
}

export default function* teamRoot() {
  yield all([getTeamWatcher(), getTeamMemebersWatcher(), createTeamWatcher(), inviteMemberWatcher()]);
}

const createNewTeamObj = (team) => {
  return {
    name: team.team, id: teams.length + 1,

    xid: "asdasdoiasdfh89hasdj", owner: {
      id: 1,
      xid: "adohasdfah9hahd",
      name: "Avinash Vundyala",
      email: "vundyala.avinash@gmail.com",
      isOwner: true,
      emailVerified: true,
      organizationId: 2
    }, active: true,
    createdOn: new Date(), createdBy: {
      id: 1,
      xid: "adohasdfah9hahd",
      name: "Avinash Vundyala",
      email: "vundyala.avinash@gmail.com",
      isOwner: true,
      emailVerified: true,
      organizationId: 2
    },

    lastModifiedOn: new Date(),
    lastModifiedBy: {
      id: 1,
      xid: "adohasdfah9hahd",
      name: "Avinash Vundyala",
      email: "vundyala.avinash@gmail.com",
      isOwner: true,
      emailVerified: true,
      organizationId: 2
    }
  }
}
const teamMembers: any[] = [{
  "id": 1,
  "team": {
    "id": 4,
    "xid": "cec5d0db-102f-429c-a7d4-da0523c286f1",
    "name": "CEX-Primary",
    "orgId": 8,
    "active": true,
    "createdOn": null,
    "createdBy": {
      "id": 7,
      "xid": "285fa5c6-5c09-4178-b9be-d41989f44fac",
      "name": "Avinash Vundyala",
      "email": "vundyala.avinash@gmail.com",
      "password": "$2a$11$fhcmB2BqHqTkRqAPZUeuO.17vd.4VWW1M8My5D80zAQ4IkaMOVn2e",
      "active": true,
      "createdOn": null,
      "lastModifiedOn": null,
      "organizationOwner": true,
      "organization": {
        "id": 8,
        "xid": "23781774-fcb5-4e5d-8716-b1a63cddcf66",
        "name": "CEX",
        "planType": "TRAIL",
        "active": true,
        "createdOn": null,
        "lastModifiedOn": null
      },
      "emailVerified": true,
      "emailVerificationCode": "b709b493-72c8-431d-9c62-ba3814b03eb0",
      "emailVerificationCodeCreatedOn": null
    },
    "lastModifiedOn": null,
    "lastModifiedBy": {
      "id": 7,
      "xid": "285fa5c6-5c09-4178-b9be-d41989f44fac",
      "name": "Avinash Vundyala",
      "email": "vundyala.avinash@gmail.com",
      "password": "$2a$11$fhcmB2BqHqTkRqAPZUeuO.17vd.4VWW1M8My5D80zAQ4IkaMOVn2e",
      "active": true,
      "createdOn": null,
      "lastModifiedOn": null,
      "organizationOwner": true,
      "organization": {
        "id": 8,
        "xid": "23781774-fcb5-4e5d-8716-b1a63cddcf66",
        "name": "CEX",
        "planType": "TRAIL",
        "active": true,
        "createdOn": null,
        "lastModifiedOn": null
      },
      "emailVerified": true,
      "emailVerificationCode": "b709b493-72c8-431d-9c62-ba3814b03eb0",
      "emailVerificationCodeCreatedOn": null
    }
  },
  "account": {
    "id": 7,
    "xid": "285fa5c6-5c09-4178-b9be-d41989f44fac",
    "name": "Avinash Vundyala",
    "email": "vundyala.avinash@gmail.com",
    "active": true,
    "createdOn": null,
    "lastModifiedOn": null,
    "organizationOwner": true,
    "organization": {
      "id": 8,
      "xid": "23781774-fcb5-4e5d-8716-b1a63cddcf66",
      "name": "CEX",
      "planType": "TRAIL",
      "active": true,
      "createdOn": null,
      "lastModifiedOn": null
    },
    "emailVerified": true,
    "emailVerificationCode": "b709b493-72c8-431d-9c62-ba3814b03eb0",
    "emailVerificationCodeCreatedOn": null
  },
  "teamMemberType": "OWNER",
  "active": true,
  "createdOn": null,
  "createdBy": {
    "id": 7,
    "xid": "285fa5c6-5c09-4178-b9be-d41989f44fac",
    "name": "Avinash Vundyala",
    "email": "vundyala.avinash@gmail.com",
    "active": true,
    "createdOn": null,
    "lastModifiedOn": null,
    "organizationOwner": true,
    "organization": {
      "id": 8,
      "xid": "23781774-fcb5-4e5d-8716-b1a63cddcf66",
      "name": "CEX",
      "planType": "TRAIL",
      "active": true,
      "createdOn": null,
      "lastModifiedOn": null
    },
    "emailVerified": true,
    "emailVerificationCode": "b709b493-72c8-431d-9c62-ba3814b03eb0",
    "emailVerificationCodeCreatedOn": null
  },
  "lastModifiedOn": null,
  "lastModifiedBy": {
    "id": 7,
    "xid": "285fa5c6-5c09-4178-b9be-d41989f44fac",
    "name": "Avinash Vundyala",
    "email": "vundyala.avinash@gmail.com",
    "active": true,
    "createdOn": null,
    "lastModifiedOn": null,
    "organizationOwner": true,
    "organization": {
      "id": 8,
      "xid": "23781774-fcb5-4e5d-8716-b1a63cddcf66",
      "name": "CEX",
      "planType": "TRAIL",
      "active": true,
      "createdOn": null,
      "lastModifiedOn": null
    },
    "emailVerified": true,
    "emailVerificationCode": "b709b493-72c8-431d-9c62-ba3814b03eb0",
    "emailVerificationCodeCreatedOn": null
  },
  "org_id": null
}];
const createNewMember = (member) => {
  return {
    id: 1,
    xid: "asdands9h9hasdasd98",
    name: member.name,
    email: member.email,
    active: true,
    teamMemberType: 'OWNER',

    createdOn: new Date(),
    createdBy: {
      id: 1,
      xid: "adohasdfah9hahd",
      name: "Avinash Vundyala",
      email: "vundyala.avinash@gmail.com",
      isOwner: true,
      emailVerified: true,
      organizationId: 2
    },

    lastModifiedOn: new Date(),
    lastModifiedBy: {
      id: 1,
      xid: "adohasdfah9hahd",
      name: "Avinash Vundyala",
      email: "vundyala.avinash@gmail.com",
      isOwner: true,
      emailVerified: true,
      organizationId: 2
    }
  }
}
const teams: any[] = [{
  id: 1,
  xid: "asdasdoiasdfh89hasdf",
  name: "Sales",
  organizationId: 2,
  owner: {
    id: 1,
    xid: "adohasdfah9hahd",
    name: "Avinash Vundyala",
    email: "vundyala.avinash@gmail.com",
    isOwner: true,
    emailVerified: true,
    organizationId: 2
  },
  members: teamMembers,
  active: true,
  createdOn: new Date(),
  createdBy: {
    id: 1,
    xid: "adohasdfah9hahd",
    name: "Avinash Vundyala",
    email: "vundyala.avinash@gmail.com",
    isOwner: true,
    emailVerified: true,
    organizationId: 2
  },

  lastModifiedOn: new Date(),
  lastModifiedBy: {
    id: 1,
    xid: "adohasdfah9hahd",
    name: "Avinash Vundyala",
    email: "vundyala.avinash@gmail.com",
    isOwner: true,
    emailVerified: true,
    organizationId: 2
  }
}, {
  id: 2,
  xid: "asdasdoiasdfh89hasdfa9s8ha9dhasd",
  name: "Marketing",
  organizationId: 2,
  owner: {
    id: 1,
    xid: "adohasdfah9hahd",
    name: "Nikhil Ramancha",
    email: "vundyala.avinash@gmail.com",
    isOwner: true,
    emailVerified: true,
    organizationId: 2
  },
  members: teamMembers,
  active: true,
  createdOn: new Date(),
  createdBy: {
    id: 1,
    xid: "adohasdfah9hahd",
    name: "Avinash Vundyala",
    email: "vundyala.avinash@gmail.com",
    isOwner: true,
    emailVerified: true,
    organizationId: 2
  },

  lastModifiedOn: new Date(),
  lastModifiedBy: {
    id: 1,
    xid: "adohasdfah9hahd",
    name: "Avinash Vundyala",
    email: "vundyala.avinash@gmail.com",
    isOwner: true,
    emailVerified: true,
    organizationId: 2
  }
}];
