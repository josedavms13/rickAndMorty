

function fetchByLocation(input) {

    let url = `https://rickandmortyapi.com/api/location/?`

    if (input.includes('*-')) {

        const locationAndDimension = input.split('*-')

        const location = locationAndDimension[0].trim();
        let dimension = locationAndDimension[1].trim();

        if (dimension.includes('dimension')) {


            dimension = dimension.replace('dimension', '').trim();


        }



        url += `name=${location}&dimension=${dimension}`


        const searchByLocationResults = fetch(url)
            .then(response => response.json())


        return searchByLocationResults

    } else {

        const location = input.trim();


        url += `name=${location}`;

        const searchByLocationResults =fetch(url)
            .then(response=>response.json())

        return searchByLocationResults
    }


}


export default fetchByLocation;