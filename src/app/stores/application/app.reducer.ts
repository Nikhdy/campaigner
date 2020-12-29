import { TOGGLE_SIDE_MENU, SHOW_MODAL , SET_CURRENT_ROUTE} from "./app.action";

const initialState = {
  isSideBarMini: false,
  viewModal: '',
  currentRoute: ''
};


const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU:
      return { ...state, isSideBarMini: !state.isSideBarMini };
    case SHOW_MODAL:
      return { ...state, viewModal: action.payload };
    case SET_CURRENT_ROUTE:
      return {...state, currentRoute: action.payload};  
    default:
      return state;
  }
};

export default appReducer;
