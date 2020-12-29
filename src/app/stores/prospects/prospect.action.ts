export const FETCH_PROSPECTS = 'FETCH_PROSPECTS';
export const FETCH_PROSPECTS_SUCCESS = 'FETCH_PROSPECTS_SUCCESS';
export const FETCH_PROSPECTS_ERROR = 'FETCH_PROSPECTS_ERROR';

export const fetchProspects = (filter) => ({ type: FETCH_PROSPECTS, payload: filter });


export const FETCH_PROSPECT_COLUMNS = 'FETCH_PROSPECT_COLUMNS';
export const FETCH_PROSPECT_COLUMNS_SUCCESS = 'FETCH_PROSPECT_COLUMNS_SUCCESS';
export const FETCH_PROSPECT_COLUMNS_ERROR = 'FETCH_PROSPECT_COLUMNS_ERROR';

export const fetchProspectColumns = () => ({ type: FETCH_PROSPECT_COLUMNS })

// if needed
export const FETCH_PROSPECT = 'FETCH_PROSPECT';
export const FETCH_PROSPECT_SUCCESS = 'FETCH_PROSPECT_SUCCESS';
export const FETCH_PROSPECT_ERROR = 'FETCH_PROSPECT_ERROR';

export const fetchProspect= (id)=> ({type: FETCH_PROSPECT, payload: id});
