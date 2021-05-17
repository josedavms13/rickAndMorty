import './ViewCSS/Mode1DisplayInfoCard.css'
import {useEffect, useState} from "react";

const Mode1DisplayInfoCard = ({data})=>{

    const [name, SetName] =useState('loading');
    const [species, SetSpecies] = useState('loading');
    const [gender, SetGender] = useState('loading');
    const [origin, SetOrigin] = useState('loading');
    const [picture, SetPicture] = useState('loading');

    const [deadMessage, SetDeadMessage] = useState('loading');


useEffect(()=>{

    console.log(data[1].name)

    SetName(data[1].name);
    SetSpecies(data[1].species);
    SetGender(data[1].gender);
    SetOrigin(data[1].origin.name);
    SetPicture(data[1].image);

    SetDeadMessage(CreateMessage(data[0][0]))
},[data])


function CreateMessage(info){

    const dieInfo = info.died;

    console.log(info)

    // if doesn't has died data
    if(dieInfo === ''){




        console.log('As far as can read the future. This person will live for a long.')
        return ('As far as can read the future. This person will have long live!')
    }

    else{


        const seasonOfDeath = Number(dieInfo[1]);
        const chapterOfDeath = Number(dieInfo[3]);

        console.log(seasonOfDeath);
        console.log(chapterOfDeath);


        //People who die on same Season

        if(seasonOfDeath === 1){

            console.log('died on this season')

            //dead people

            switch (true){
                case  chapterOfDeath< 3:
                    console.log('is dead');

                    return 'This is already dead'


                case chapterOfDeath === 3:
                    console.log('die this chapter');

                    return `If you know it/he/she, you should say goodbye. Will die sooner than later`


                case chapterOfDeath === 4 || chapterOfDeath ===5:

                    console.log('will die soon');
                    return `Won't die today, but won't live much either...`

                case chapterOfDeath > 5 && chapterOfDeath < 11:
                    console.log('die ther rest of the season');

                    return `This will live longer than many... but death is scheduled`

            }





        }

        //People who will die after
        else{
            return `Will die for sure, but take it's time`
        }

        console.log(seasonOfDeath);





    }

}




    return(

        <div className={'mode2-card-container'}>
            <h1>{name}</h1>
            <div className="character-details">
                <ul>
                    <li>Species: {species}</li>
                    <li>Gender: {gender}</li>
                    <li>Origin: {origin}</li>
                </ul>
            </div>

            <div className="picture-container">
                <img src={picture} alt=""/>
            </div>

            <div className="status-info">
                <p>{deadMessage}</p>
            </div>
        </div>



    )
}

export default Mode1DisplayInfoCard