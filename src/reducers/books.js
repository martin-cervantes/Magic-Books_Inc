import { CREATE_BOOK, REMOVE_BOOK } from '../actions';
import { books } from '../store/init';

const bookIds = () => Math.ceil(Math.random() * 100);

function bookReducer(state = books, action) {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state,
        {
          bookId: bookIds(),
          author: action.book.author,
          title: action.book.title,
          category: action.book.category,
          progress: action.book.progress,
          chapter: action.book.chapter,
        },
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.bookId !== action.id);
    default:
      return state;
  }
}

export default bookReducer;
