export default function ironViewerReducer(state = [], action) {
  switch (action.type){
    case 'FETCH_ALL_IRON' : {
      return {
        ...state,
        ironData: action.data,
      };
    }
    default: { return state; }
  }
}
