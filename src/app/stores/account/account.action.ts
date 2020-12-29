import { saveToLS } from '../../utils';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILUER';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';

export const USER_REGISTER = 'USER_REGISTER';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE';

export const AUTH_ME = 'AUTH_ME';
export const AUTH_ME_SUCCESS = 'AUTH_ME_SUCCESS';
export const AUTH_ME_FAILURE = 'AUTH_ME_FAILURE';

export const USER_REST_PASSWORD = 'USER_REST_PASSWORD';
export const USER_REST_PASSWORD_SUCCESS = 'USER_REST_PASSWORD_SUCCESS';
export const USER_REST_PASSWORD_FAILURE = 'USER_REST_PASSWORD_FAILURE';


export const userLogout = () => { saveToLS("user", null); return { type: USER_LOGOUT }; };
export const userLogin = (user: Account.ILoginUser) => ({ type: USER_LOGIN, payload: user });
export const onResetPassword = (email: string) => ({ type: USER_REST_PASSWORD, payload: email });
export const userRegister = (user: Account.IRegisterUser) => ({ type: USER_REGISTER, payload: user });

export const me = () => ({ type: AUTH_ME }); 
