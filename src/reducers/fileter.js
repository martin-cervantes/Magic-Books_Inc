import { CHANGE_FILTER } from '../actions';

function filterReducer(state = {}, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.category;
    default:
      return state;
  }
}

export default filterReducer;
