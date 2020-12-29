
// https://github.com/github/fetch/issues/271 - The fetch function is a browser window global. It is not an export.
require('whatwg-fetch');
import * as _ from 'lodash';

const BASE_URL = '/api/v1';

function call(url: string, options: any) {
  return fetch(
    url,
    _.merge(
      {
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      },
      options
    )).then((response: any) => {
      if (!response.ok) {
        return { status: "FAILURE", code: response.status, error: response.statusText };
      } else {
        if (response.status === 401) {
          window.location.href = '/login';
          return;
        } else {
          return response.json();
        }
      }
    })
}

export function post(path: string, data: any, isFromData?: boolean) {

  return call(BASE_URL + path, {
    method: 'post',
    body: isFromData ? data : JSON.stringify(data),
    headers: {
      'Content-Type': isFromData ? 'application/x-www-form-urlencoded' : 'application/json'
    }
  });

}

export function get(path: string) {
  return call(BASE_URL + path, {
    method: 'get'
  });
}

export function put(path: string, data: any) {
  return call(BASE_URL + path, {
    method: 'put',
    body: JSON.stringify(data)
  });
}

export function del(path: string) {
  return call(BASE_URL + path, {
    method: 'delete'
  });
}
