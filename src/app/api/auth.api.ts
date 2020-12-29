import * as server from './server';

const BASE_URL = '/auth';

export function register(data) {
  return server.post( BASE_URL + '/register', data);
}

function addItemToForm(form, name, value) {
  value = encodeURIComponent(value.toString());
  form.push(`${name}=${value}`);
}

export function login(data) {
  const form = [];
  addItemToForm(form, 'email', data.email);
  addItemToForm(form, 'password', data.password);

  return server.post( BASE_URL + '/login', form.join('&'), true);
}

export function me() {
  return server.get( BASE_URL + '/me' );
}

export function logout() {
  return server.post( BASE_URL + '/logout', null );
}



