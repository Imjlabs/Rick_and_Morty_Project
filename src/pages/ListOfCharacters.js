import { CardCharacter } from "../components/CardCharacter";
import ListCharacters from "../components/ListCharacters";
import { getAllCharacters } from "../utils/Api";

const ListOfCharacters = async () => {
    const res = await getAllCharacters()
    const data = res.map((element) => ({
        image: element.image,
        name: element.name,
        gender: element.gender
    }))
    console.log(res)
    return ListCharacters(data)
}

export default ListOfCharacters