import search from "../components/Search";
import { getCharacter } from "../utils/Api";

const Character = async () => {
  const res = await getCharacter();
  const data = res.map((element) => ({
    image: element.image,
    name: element.name,
    gender: element.gender,
  }));

  return search(data);
};

export default Character;
