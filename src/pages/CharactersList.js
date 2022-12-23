import CharactersList from "../components/Characters";
import { getAllCharacters } from "../utils/Api";

const AllCharacters = async () => {
  const res = await getAllCharacters();
  const data = res.map((element) => ({
    image: element.image,
    name: element.name,
    gender: element.gender,
  }));

  return CharactersList(data);
};

export default AllCharacters;
