import * as server from './server';

const BASE_URL = '/team';

export function createTeam(data) {
  return server.post(BASE_URL, data);
}

export function getTeams() {
  return server.get(BASE_URL + "/");
}

export function getTeamMembers(request) {
  const teamId = request.payload.teamId;
  return server.get(`${BASE_URL}/${teamId}/members`);
}

