import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const bookIds = () => Math.ceil(Math.random() * 100);

function bookReducer(state = [], action) {
  switch (action.type) {
    case CREATE_BOOK:
    return Object.assign({}, state, { books:[
      ...state.books,
      {
        bookId: bookIds(),
        title: action.book.title,
        category: action.book.category,
      },
    ]});
    case REMOVE_BOOK:
      return Object.assign({}, state, {
        books:state.books.filter(book => book.bookId !== action.book.bookId)
      });
    default:
      return state;
  }
}

export default bookReducer;
