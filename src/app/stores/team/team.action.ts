
export const FETCH_TEAMS = 'FETCH_TEAMS';
export const FETCH_TEAMS_ERROR = 'FETCH_TEAMS_ERROR';
export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS';

export const FETCH_TEAM_MEMBERS = 'FETCH_TEAM_MEMBERS';
export const FETCH_TEAM_MEMBERS_ERROR = 'FETCH_TEAM_MEMBERS_ERROR';
export const FETCH_TEAM_MEMBERS_SUCCESS = 'FETCH_TEAM_MEMBERS_SUCCESS';

export const CREATE_TEAM = 'CREATE_TEAM';
export const CREATE_TEAM_SUCCESS = 'CREATE_TEAM_SUCCESS';
export const CREATE_TEAM_ERROR = 'CREATE_TEAM_ERROR';

export const INVITE_MEMBER = 'INVITE_MEMBER';
export const INVITE_MEMBER_SUCCESS = 'INVITE_MEMBER_SUCCESS';
export const INVITE_MEMBER_ERROR = 'INVITE_MEMBER_ERROR';

export const UPDATE_TEAM_MEMBER = 'UPDATE_TEAM_MEMBER';
export const UPDATE_TEAM_MEMBER_SUCCESS = 'UPDATE_TEAM_MEMBER_SUCCESS';
export const UPDATE_TEAM_MEMBER_ERROR = 'UPDATE_TEAM_MEMBER_ERROR';

export const REMOVE_MEMBER = 'REMOVE_MEMBER';
export const REMOVE_MEMBER_SUCCESS = 'REMOVE_MEMBER_SUCCESS';
export const REMOVE_MEMBER_ERROR = 'REMOVE_MEMBER_ERROR';

export const DELETE_TEAM ='DELETE_TEAM';
export const DELETE_TEAM_SUCCESS ='DELETE_TEAM_SUCCESS';
export const DELETE_TEAM_ERROR ='DELETE_TEAM_ERROR';



export const MODIFY_TEAM_MEMBER = 'MODIFY_TEAM_MEMBER';

export const modifyTeamMember = (member, teamId: string | number) => ({ type: MODIFY_TEAM_MEMBER, payload: { member, teamId } })

export const onRemoveMember =() => ({type: REMOVE_MEMBER})

export const fetchTeams = () => ({ type: FETCH_TEAMS });
export const fetchTeamMembers = (teamId: string | number) => ({ type: FETCH_TEAM_MEMBERS, payload: { teamId } })

export const createTeam = (team) => ({ type: CREATE_TEAM, payload: team });
export const inviteMember = (member, id) => ({ type: INVITE_MEMBER, payload: { member, teamId: id } });

export const updateTeamMember = (member) => ({ type: UPDATE_TEAM_MEMBER, payload: member });

export const deleteTeam = () => ({type: DELETE_TEAM})
