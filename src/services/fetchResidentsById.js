


function fetchResidentsById(ids){


    const residentIds = ids.slice(1, ids.log);

    let url = `https://rickandmortyapi.com/api/character/${residentIds}`

    const residentsPromise = fetch(url)
        .then(response => response.json())


    console.log(url);

    return residentsPromise
}



export default fetchResidentsById