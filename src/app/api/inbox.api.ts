import * as server from './server';

const BASE_URL = '/inbox';

export function fetchInbox() {
  return server.get(BASE_URL).then(res => res);
}
