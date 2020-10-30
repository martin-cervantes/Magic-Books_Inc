import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

function bookReducer(state = [], action) {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          bookId: action.bookId,
          title: action.title,
          category: action.category,
        },
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.bookId === action.bookId);
    default:
      return state;
  }
}

export default bookReducer;
