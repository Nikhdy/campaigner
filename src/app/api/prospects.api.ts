import * as server from './server';

const BASE_URL = '/prospect';

/*fetch columns*/
export function fetchProspectColumns() {
  return server.get(BASE_URL + '/field');
}

export function addProspect(prospectData) {
  return server.post(BASE_URL, prospectData);
}

export function addField(data) {
  return server.post(BASE_URL + '/field', data);
}

export function fetchProspects(data) {
  return server.post(BASE_URL + '/search', data);
}

export function updateProspect(data, id: string) {
  return server.put(BASE_URL + '/' + id, data);
}

export function delPropsects(data) {
  return server.put(BASE_URL + '/delete', data);
}
