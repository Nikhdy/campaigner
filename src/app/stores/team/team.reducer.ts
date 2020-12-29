import * as _ from 'lodash';

import {
  FETCH_TEAMS, FETCH_TEAMS_SUCCESS, FETCH_TEAMS_ERROR,
  FETCH_TEAM_MEMBERS, FETCH_TEAM_MEMBERS_SUCCESS, FETCH_TEAM_MEMBERS_ERROR,
  UPDATE_TEAM_MEMBER, UPDATE_TEAM_MEMBER_ERROR, UPDATE_TEAM_MEMBER_SUCCESS,
  CREATE_TEAM, CREATE_TEAM_ERROR, CREATE_TEAM_SUCCESS,
  INVITE_MEMBER, INVITE_MEMBER_ERROR, INVITE_MEMBER_SUCCESS,
  MODIFY_TEAM_MEMBER
} from './team.action';

const initialState = {
  teams: [],
  teamMembers: [], // tis will be moved to teams later
  loaded: false,
  teamId: null,
  member: null,
  isLoading: false,
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAMS:
      return { ...state, isLoading: true }
    case FETCH_TEAMS_SUCCESS:
      return { ...state, teams: _.cloneDeep(action.payload), loaded: true, isLoading: false };
    case FETCH_TEAMS_ERROR:
      return { ...state, teams: [], loaded: false, isLoading: false };
    case FETCH_TEAM_MEMBERS:
      return { ...state, isLoading: true }
    case FETCH_TEAM_MEMBERS_SUCCESS:
      return { ...state, teamMembers: _.cloneDeep(action.payload), loaded: true, isLoading: false };
    case FETCH_TEAM_MEMBERS_ERROR:
      return { ...state, teamMembers: [], loaded: false, isLoading: false };
    case CREATE_TEAM:
      return { ...state, isLoading: true };
    case CREATE_TEAM_SUCCESS:
      return { ...state, teams: [...state.teams, action.payload], isLoading: false }
    case CREATE_TEAM_ERROR:
      return { ...state, isLoading: false }
    case INVITE_MEMBER:
      return { ...state, isLoading: true }
    case INVITE_MEMBER_SUCCESS:
      return { ...state, isLoading: false, teamMembers: [...state.teamMembers, action.payload] } // will be moved to team later
    case INVITE_MEMBER_ERROR:
      return { ...state, isLoading: false };
    case UPDATE_TEAM_MEMBER:
      return { ...state, isLoading: true };
    case UPDATE_TEAM_MEMBER_ERROR:
      return { ...state, isLoading: false };
    case UPDATE_TEAM_MEMBER_SUCCESS:
      return { ...state, isLoading: false, teams: action.payload };
    case MODIFY_TEAM_MEMBER:
      return { ...state, teamId: action.payload.teamId, member: action.payload.member }
    default:
      return state;
  }
};

export default teamReducer;
