export const getAllCharacters = async () => {
    const req = await fetch('https://rickandmortyapi.com/api/character')
    const res = await req.json()

    return res.results
}
export const getOneCharacter = async (id) => {
    const req = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const res = await req.json()
    console.log(res);
    return res.results
}