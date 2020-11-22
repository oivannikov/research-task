const BASE_URL = `https://www.anapioficeandfire.com/api/books`;

export async function getBooks() {
  const response = await fetch(`${BASE_URL}`);
  const books = await response.json();
  
  return books;
}

export async function getBookByid(bookId: number) {
  const response = await fetch(`${BASE_URL}/${bookId}`);
  const book = await response.json();

  return book;
}
