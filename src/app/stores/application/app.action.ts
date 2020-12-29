export const SHOW_MODAL = 'SHOW_MODAL';
export const TOGGLE_SIDE_MENU = 'TOGGLE_SIDE_MENU';
export const SET_CURRENT_ROUTE = 'SET_CURRENT_ROUTE';

export const toggleSideMenu = () => ({ type: TOGGLE_SIDE_MENU });
export const showModal = (modalName: string) => ({ type: SHOW_MODAL, payload: modalName });
export const setRoute = (route: string) => ({type: SET_CURRENT_ROUTE, payload: route});
