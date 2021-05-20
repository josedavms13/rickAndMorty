import {useEffect, useState} from "react";
import ResidentListItem from "../components/residentListItem";
import './ViewCSS/Mode2ResidentsCard.css'

const Mode2ResidentsCardList = ({urls}) => {

const [cardToggle, SetCardToggle] = useState(null);
const [amountOfDataToDisplay, SetAmountOfDataToDisplay] = useState(null);


    useEffect(()=>{


   },[urls])


    function setAmountOfCards(){

        if(amountOfDataToDisplay > 0){


            const newArray = [...urls.residents];

            return newArray.slice(0, amountOfDataToDisplay);

        }

        else{
            return [...urls.residents];
        }


    }







    function displayCards(){



        SetCardToggle(true);


    }

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
                    setAmountOfCards().map((url, index)=>{
                       return <ResidentListItem url={url} key={index}/>
                    })
                }
            </div>

            }

        </div>


    )
}

export default Mode2ResidentsCardList