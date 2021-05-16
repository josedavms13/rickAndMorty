
function fetchByName(name){

    const baseUrl = `https://rickandmortyapi.com/api/character/?name=`


    splitUserInput(name)

    const Query = splitUserInput(name)[0];

    const Details = splitUserInput(name)[1];

    return customFetch(baseUrl+Query, Details)
}


// Splits user inputs and return query and details for the search
function splitUserInput(data){

    const splitInput = data.split(' ')

    // More than 1 name
    // Return [urlQuery, comparisonSample]
    if(splitInput.length > 1){


        let urlQuery =  splitInput[0];

        let comparisonSample = (splitInput[0][0].toUpperCase()) + (splitInput[0].slice(1, splitInput[0].length));

        for (let i = 1; i < splitInput.length; i++) {

            comparisonSample += ' ' + (splitInput[i][0].toUpperCase()) + (splitInput[i].slice(1, splitInput[i].length))
            urlQuery += '&'+ splitInput[i];
        }

        return [urlQuery, comparisonSample];

    }

    // Only 1 name
        //return, [urlQuery, 0<index of first result>

    else{
        console.log('menos de 1')

        const urlQuery = data;

        return [urlQuery, 0]

    }
}


function customFetch(query, details){

    if(details === 0){

        fetch(query)
            .then(response => response.json())
            .then(data=>{

                return (data.results[details])

            })

    } else{

        fetch(query)
            .then(response => response.json())
            .then(data=>{


                return (data.results.filter((item)=>item.name === details))


            })

    }




}




export default fetchByName