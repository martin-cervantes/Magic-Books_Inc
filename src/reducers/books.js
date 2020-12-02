import { CREATE_BOOK, REMOVE_BOOK } from '../actions';
import { books } from '../store/init';

const bookIds = () => Math.ceil(Math.random() * 100);

function bookReducer(state = books, action) {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state,
        {
          bookId: bookIds(),
          title: action.book.title,
          category: action.book.category,
        },
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.bookId !== action.id);
    default:
      return state;
  }
}

export default bookReducer;
