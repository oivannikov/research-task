const BASE_URL = `https://www.anapioficeandfire.com/api/`;

async function getBooks() {
  const response = await fetch(`${BASE_URL}/books`);
  
  console.log(response);
}