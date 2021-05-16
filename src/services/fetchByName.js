
function fetchByName(name){

    const splittedInput = name.split(' ')
    let filteredUserInput = (splittedInput[0][0].toUpperCase())+(splittedInput[0].slice(1, splittedInput[0].length));

    for(let i = 1; i<splittedInput.length; i++){

        filteredUserInput += ' '+ (splittedInput[i][0].toUpperCase())+(splittedInput[i].slice(1, splittedInput[i].length))
    }




    console.log(filteredUserInput);

    const baseUrl = `https://rickandmortyapi.com/api/character/?name=`


    console.log(name)




}

export default fetchByName