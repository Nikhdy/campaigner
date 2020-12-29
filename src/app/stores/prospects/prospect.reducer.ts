import {
  FETCH_PROSPECT, FETCH_PROSPECT_COLUMNS, FETCH_PROSPECTS,
  FETCH_PROSPECT_SUCCESS, FETCH_PROSPECT_COLUMNS_SUCCESS, FETCH_PROSPECTS_SUCCESS,
  FETCH_PROSPECT_ERROR, FETCH_PROSPECT_COLUMNS_ERROR, FETCH_PROSPECTS_ERROR
} from './prospect.action';


interface IProspectReducer {
  columns: ReactDataGrid.IColumn[],
  prospects: any[],
  isLoading: boolean,
  prospectId: string | number | null;
}

const initialState: IProspectReducer = {
  columns: [],
  prospects: [],
  isLoading: false,
  prospectId: null,
}

const prospectReducer = (state: IProspectReducer = initialState, action) => {
  switch (action.type) {
    case FETCH_PROSPECTS:
      return { ...state, isLoading: true }
    case FETCH_PROSPECTS_SUCCESS:
      return { ...state, prospects: action.payload, isLoading: false };
    case FETCH_PROSPECTS_ERROR:
      return { ...state, prospects: [], isLoading: false };
    case FETCH_PROSPECT:
      return { ...state };
    case FETCH_PROSPECT_SUCCESS:
      return { ...state };
    case FETCH_PROSPECT_ERROR:
      return { ...state };
    case FETCH_PROSPECT_COLUMNS:
      return { ...state }
    case FETCH_PROSPECT_COLUMNS_SUCCESS:
      return { ...state, columns: action.payload }
    case FETCH_PROSPECT_COLUMNS_ERROR:
      return { ...state };
    default:
      return state;
  }
};

export default prospectReducer;


