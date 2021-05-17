import './ViewCSS/mode1DisplayInfoCard.css'
import {useEffect, useState} from "react";

const Mode1DisplayInfoCard = ({data})=>{

    const [name, SetName] =useState('loading');
    const [species, SetSpecies] = useState('loading');
    const [gender, SetGender] = useState('loading');
    const [origin, SetOrigin] = useState('loading');
    const [picture, SetPicture] = useState('loading');

    const [deadMessage, SetDeadMessage] = useState('loading');


useEffect(()=>{


    SetName(data[1].name);
    SetSpecies(data[1].species);
    SetGender(data[1].gender);
    SetOrigin(data[1].origin.name);
    SetPicture(data[1].image);

    SetDeadMessage(CreateMessage(data[0][0]))

},[data])


function CreateMessage(info){

    if(info !== undefined) {
        const dieInfo = info.died;


        // if doesn't has died data
        if (dieInfo === '') {


            return ('As far as can read the future. This person will have long live!')
        } else {


            const seasonOfDeath = Number(dieInfo[1]);
            const chapterOfDeath = Number(dieInfo[3]);


            //People who die on same Season

            if (seasonOfDeath === 1) {


                //dead people

                switch (true) {
                    case  chapterOfDeath < 3:

                        return 'This is already dead'


                    case chapterOfDeath === 3:

                        return `If you know it/he/she, you should say goodbye. Will die sooner than later`


                    case chapterOfDeath === 4 || chapterOfDeath === 5:

                        return `Won't die today, but won't live much either...`

                    case chapterOfDeath > 5 && chapterOfDeath < 11:

                        return `This will live longer than many... but death is scheduled`

                    default:
                        return 'Have no idea'
                }


            }

            //People who will die after
            else {
                return `Will die for sure, but take it's time`
            }


        }
    }
    else
    {return `No info found`}

}


function reset(){
    window.location.reload();
}


    return(

        <div className={'mode1-card-container'}>

            <div className="info-document">
                <div className="header">

                    <h1>{name}</h1>
                    <button onClick={reset}>New Search</button>
                </div>
                <div className="outheader">

                    <div className="picture-container">
                        <img src={picture} alt=""/>

                    </div>

                    <div className="character-details">
                        <ul>
                            <li>Species: {species}</li>
                            <li>Gender: {gender}</li>
                            <li>Origin: {origin}</li>
                        </ul>

                        <div className="status-info">
                            <p>{deadMessage}</p>
                        </div>

                    </div>

                </div>


            </div>
        </div>



    )
}

export default Mode1DisplayInfoCard