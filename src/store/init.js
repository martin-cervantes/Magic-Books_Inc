let bookIds = Math.ceil(Math.random() * 10000);

const authors = [
  'Dan Brown',
  'Walter Isaacson',
  'Thomas Asbridge',
  'Edgar Allan Poe',
  'Lewis Carroll',
  'Kevin Horsley',
  'Isaac Asimov',
];

const bookTitles = [
  'The Da Vinci Code',
  'Steve Jobs',
  'The Crusades',
  'Tales of Terror and Madness',
  'Alice\'s Adventures in Wonderland',
  'Unlimited Memory',
  'I, Robot',
];

const categories = [
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
    author: authors[i],
    title: book,
    category: categories[i],
    progress: Math.ceil(Math.random() * 100),
    chapter: 'Chapter 1',
  });
});

export { books, categories };
