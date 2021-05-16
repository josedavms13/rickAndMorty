import {useEffect, useState} from "react";
import ResidentListItem from "../components/residentListItem";


const ResidentsListCard = ({data})=>{

    const [cardToggle, SetCardToggle] = useState(false);

    const [overallData, SetOverallData] = useState(null)
    const [amountOfDataToDisplay, SetAmountOfDataToDisplay]= useState(0)
    const [dataToDisplay, SetDataToDisplay] = useState(null);


    const [characterName, SetCharacterName] = useState(null)
    const [characterSpecies, SetCharacterSpecies] = useState(null)
    const [characterGender, SetCharacterGender] = useState(null)
    const [characterStatus, SetCharacterStatus] = useState(null)
    const [characterPicture, SetCharacterPicture] = useState(null)

    useEffect(()=>{

        console.log(data);

        if(data){

            SetOverallData(data);
        }


    },[data])





    function displayCards(){
        if(amountOfDataToDisplay === 0){
            console.log('display all data')
        }
        else {
            const maxNumber = () => {

                if (amountOfDataToDisplay > overallData.length) {
                    return overallData.length
                } else {
                    return amountOfDataToDisplay
                }


            }

            console.log(maxNumber())
        }

        // SetCharacterName(overallData[0].name);
        // SetCharacterSpecies(overallData[0].species);
        // SetCharacterGender(overallData[0].gender);
        // SetCharacterStatus(overallData[0].status);
        // SetCharacterPicture(overallData[0].image);

    }






    return(


        <div className={'resident-list-container'}>

            <div className="display-settings">
                <div className="display-instructions">
                    <label>Set the number of items to display</label>
                    <p>If 0, it will display all results</p>
                </div>
                <div className="form">
                    <input type="number" min={0} defaultValue={0} onChange={(e) => {
                        SetAmountOfDataToDisplay(Number(e.target.value))
                    }}/>
                    <button onClick={displayCards}>Submit!</button>
                </div>


                <div className="go-back-container">
                    <button>Go Back</button>
                </div>
            </div>
            {cardToggle&&<div className="cards-container">

                <ResidentListItem name={characterName} species={characterSpecies} gender={characterGender}
                                  status={characterStatus} picture={characterPicture}/>
            </div>}
        </div>


    )
}

export default ResidentsListCard