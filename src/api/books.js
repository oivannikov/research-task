const BASE_URL = `https://www.anapioficeandfire.com/api/books`;

export async function getBooks() {
  const response = await fetch(`${BASE_URL}`);
  const books = await response.json();
  
  return books;
}
