// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {

  // can use return catalogue.length but in the spirit of the lesson, used a for loop.
  i = 0;
  for (i = 0; i < catalogue.length; i++){
    i++;
  }
  return i;
};


function checkBook(book) {
  if (catalogue.includes(book)){
    return true;
  } else {
    return false;
  };
};

function countBooksByFirstLetter(letter) {
  let j = 0;
  for (let i = 0; i < catalogue.length; i++){
    if (catalogue[i].startsWith(letter)){
      j++;
    };
  };
  return j;
};

function countBooksByKeyword(keyword) {
  let j = 0;
  for (let i = 0; i < catalogue.length; i++) {
    if (catalogue[i].toLowerCase().includes(keyword.toLowerCase())) {
      j++;
    };
  }
  return j;
}

function getBooksByAuthor(author) {
  let authorList = []
  for (let i = 0; i < catalogue.length; i++) {
    if (catalogue[i].includes(author)) {
      authorList.push(catalogue[i]);
      
    };
  };
  return authorList;
};

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};
