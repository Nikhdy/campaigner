import * as server from './server';
const BASE_URL = '/campaign';

export function fetchAllCampaigns() {
  return server.get(BASE_URL).then(res => res);
}

export function createCampaign(data) {
  return server.post(BASE_URL + '/create', data).then(res => res);
}

export function fetchCampaignById(data) {
  return server.get(BASE_URL + '/' + data).then(res => res);
}

export function updateCampaign(data) {
  return server.put(BASE_URL + '/' + data.id, data).then(res => res);
}
// all drips or only edited drip
export function saveCampaignDrip(data){
  return server.put(BASE_URL+ '/'+ data.id, data).then(res=> res);
}