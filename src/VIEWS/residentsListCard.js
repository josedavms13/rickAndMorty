import {useEffect, useState} from "react";
import ResidentListItem from "../components/residentListItem";


const ResidentsListCard = ({data})=>{

    const [characterName, SetCharacterName] = useState(null)
    const [characterSpecies, SetCharacterSpecies] = useState(null)
    const [characterGender, SetCharacterGender] = useState(null)
    const [characterStatus, SetCharacterStatus] = useState(null)
    const [characterPicture, SetCharacterPicture] = useState(null)

    useEffect(()=>{

        console.log(data);

        SetCharacterName(data[0].name);
        SetCharacterSpecies(data[0].species);
        SetCharacterGender(data[0].gender);
        SetCharacterStatus(data[0].status);
        SetCharacterPicture(data[0].image);

        console.log(characterName)



    },[data])









    return(


        <div className={'resident-list-container'}>


            <ResidentListItem name={characterName} species={characterSpecies} gender={characterGender} status={characterStatus} picture={characterPicture}/>
        </div>





    )
}

export default ResidentsListCard