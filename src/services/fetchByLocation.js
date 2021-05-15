// let url = `https://rickandmortyapi.com/api/location/?dimension=unknown&name=citadel`


function fetchByLocation(input) {

    let url = `https://rickandmortyapi.com/api/location/?`

    if (input.includes('*-')) {

        const locationAndDimension = input.split('*-')

        const location = locationAndDimension[0].trim();
        let dimension = locationAndDimension[1].trim();

        if (dimension.includes('dimension')) {

            console.log('includes dimension')

            dimension = dimension.replace('dimension', '').trim();


        }


        console.log('has dimension')

        url += `name=${location}&dimension=${dimension}`


        const searchByLocationResults = fetch(url)
            .then(response => response.json())


        return searchByLocationResults

    } else {

        const location = input.trim();
        console.log('hasnot dimension');


        url += `name=${location}`;

        const searchByLocationResults =fetch(url)
            .then(response=>response.json())

        return searchByLocationResults
    }


}


export default fetchByLocation;