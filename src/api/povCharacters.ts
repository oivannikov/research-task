export async function getCurrentCharacter(url: string) {
  const response = await fetch(`${url}`);
  const character = await response.json();

  return character;
}
