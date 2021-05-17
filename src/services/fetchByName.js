
function fetchByName(query){

    const baseUrl = `https://rickandmortyapi.com/api/character/?name=${query}`

    return fetch(baseUrl)
        .then(result=>result.json())

}




export default fetchByName