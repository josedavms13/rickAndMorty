

function getApiInfo(){

    const url = 'https://rickandmortyapi.com/api/episode'


    fetch(url, {method : 'GET'})
        .then(response => response.json())
        .then(data=>console.log(data))




}


export default getApiInfo