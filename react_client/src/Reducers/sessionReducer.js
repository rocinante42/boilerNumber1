function sessionReducer(state = [], action) {
  switch (action.type) {
    case 'SETTING_SESSION' :
      return {
        ...state,
        id: action.data.id,
        username: action.data.username,
        isLoggedIn: true,
      };
    case 'LOGGIN_OUT' :
      return [];
    default: return state;
  }
}

export default sessionReducer;
