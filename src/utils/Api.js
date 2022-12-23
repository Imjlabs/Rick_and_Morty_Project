export const getAllCharacters = async () => {
  const req = await fetch("https://rickandmortyapi.com/api/character");
  const res = await req.json();

  return res.results;
};

export const getCharacter = async (name) => {
  const req = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}`
  );
  const res = await req.json();

  return res.results;
};
