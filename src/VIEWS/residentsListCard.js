import {useEffect, useState} from "react";
import ResidentListItem from "../components/residentListItem";


const ResidentsListCard = ({data}) => {

    const [cardToggle, SetCardToggle] = useState(false);

    const [overallData, SetOverallData] = useState(null)
    const [amountOfDataToDisplay, SetAmountOfDataToDisplay] = useState(0)
    const [dataToDisplay, SetDataToDisplay] = useState(null);


    const [characterName, SetCharacterName] = useState(null)
    const [characterSpecies, SetCharacterSpecies] = useState(null)
    const [characterGender, SetCharacterGender] = useState(null)
    const [characterStatus, SetCharacterStatus] = useState(null)
    const [characterPicture, SetCharacterPicture] = useState(null)

    useEffect(() => {

        console.log(data);

        if (data) {

            SetOverallData(data);
        }


    }, [data])


    function displayCards() {
        if (amountOfDataToDisplay === 0) {
            SetDataToDisplay(overallData);
            console.log('display all data')
        } else {
            const maxNumber = () => {

                if (amountOfDataToDisplay > overallData.length) {
                    return overallData.length
                } else {
                    return amountOfDataToDisplay
                }


            }

            SetDataToDisplay(overallData.splice(0, maxNumber()))

        }

        SetCardToggle(true);


    }


    useEffect(() => {
        console.log(dataToDisplay);

    }, [dataToDisplay])


    return (


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

            {cardToggle && <div className="cards-container">

                {
                    dataToDisplay.map((value)=>{
                        return <ResidentListItem name={value.name} species={value.species} gender={value.gender} status={value.status} picture={value.image} key={value.name}/>
                    })
                }
            </div>

            }

        </div>


    )
}

export default ResidentsListCard