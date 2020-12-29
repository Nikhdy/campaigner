import { USER_LOGIN, USER_LOGOUT, USER_LOGIN_SUCCESS,USER_REGISTER, USER_REGISTER_SUCCESS, AUTH_ME_SUCCESS, AUTH_ME_FAILURE, AUTH_ME } from "./account.action";
import { getFromLS, saveToLS } from '../../utils';
import * as _ from 'lodash';
import { isLoggedIn } from "./account.selector";
const initialState = {
    user: getFromLS('user') || null,
    isLoggedIn: false,
    loading: false,
};
const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return { ...state, loading: true };
        case AUTH_ME:
            return { ...state, loading: true };
        case AUTH_ME_SUCCESS:
            return { ...state, user: _.cloneDeep(action.payload), isLoggedIn: true, loading: false };
        case AUTH_ME_FAILURE:
            return { ...state, isLoggedIn: false , loading: false};
        case USER_LOGIN_SUCCESS:
            saveToLS("user", action.payload);
            return { ...state, user: _.cloneDeep(action.payload), isLoggedIn: true, loading: false };
        case USER_REGISTER:
            return { ...state, loading: true };                 
        case USER_REGISTER_SUCCESS:
            saveToLS("user", action.payload);
            return { ...state, user: _.cloneDeep(action.payload), isLoggedIn: true, loading: false };
        case USER_LOGOUT:
            return { ...state, user: null, isLoggedIn: false };
        default:
            return state;
    }
};
export default accountReducer;
