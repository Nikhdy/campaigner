export const isLoggedIn=(state)=> state.accountReducer.isLoggedIn;
export const getNumberOfTeams=(state) => state.accountReducer.user.teams? state.accountReducer.user.teams.length || 0: 0;