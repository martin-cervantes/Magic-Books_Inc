let bookIds = Math.ceil(Math.random() * 10000);

const bookTitles = [
  'The Da Vinci Code',
  'Steve Jobs',
  'The Crusades',
  'Tales of Terror and Madness',
  'Alice\'s Adventures in Wonderland ',
  'Unlimited Memory',
  'I, Robot',
];

export const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const books = [];

bookTitles.forEach((book, i) => {
  books.push({
    bookId: bookIds += 1,
    title: book,
    category: categories[i],
  });
});

export const initialState = {
  books,
  filter: 'All'
};
