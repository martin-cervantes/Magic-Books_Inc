export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export function createBook(book) {
  return {
    type: CREATE_BOOK,
    book,
  };
}

export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    id,
  };
}

export function changeFilter(category) {
  return {
    type: CHANGE_FILTER,
    category,
  };
}
