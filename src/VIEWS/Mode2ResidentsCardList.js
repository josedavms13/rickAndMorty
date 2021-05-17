import {useEffect, useState} from "react";
import ResidentListItem from "../components/residentListItem";


const Mode2ResidentsCardList = ({data}) => {

    const [cardToggle, SetCardToggle] = useState(false);

    const [overallData, SetOverallData] = useState(null)
    const [amountOfDataToDisplay, SetAmountOfDataToDisplay] = useState(0)
    const [dataToDisplay, SetDataToDisplay] = useState(null);


    //region Set the data available on the component

    useEffect(() => {

        console.log(data);

        if (data) {

            SetOverallData(data);
        }


    }, [data])

    //endregion set the data available on the component

    //region Set the amount of cards to display
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

    //endregion Set the amount of cards to display

    //Reset the search

    function reset(){
        window.location.reload();
    }

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
                    <button onClick={reset}>New Search!</button>
                </div>
            </div>

            {cardToggle && <div className="cards-container">

                {
                    dataToDisplay.map((value, index)=>{
                        return <ResidentListItem name={value.name} species={value.species} gender={value.gender} status={value.status} picture={value.image} key={index}/>
                    })
                }
            </div>

            }

        </div>


    )
}

export default Mode2ResidentsCardList