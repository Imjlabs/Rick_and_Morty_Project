import { getOneCharacter } from "../utils/Api";

const AllCharacters = async () => {
  const res = await getOneCharacter();
  const data = res.map((element) => ({
    image: element.image,
    name: element.name,
    gender: element.gender,
  }));
  console.log(res);
  return CharactersList(data);
};

export default AllCharacters;