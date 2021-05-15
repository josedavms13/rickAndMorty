import './App.css';


//region import VIEWS

import ExplanationCard from "./VIEWS/explanationCard";
import ModeSelector from "./VIEWS/modeSelector";
import SearchCard from "./VIEWS/searchCard";
import ResidentsListCard from "./VIEWS/residentsListCard";

//endregion import views

//region import SERVICES

import fetchByLocation from "./services/fetchByLocation";


//endregion import services

import {useEffect, useState} from "react";


function App() {

    //region EXPLANATION CARD
    const [explanationToggle, setExplanationToggle] = useState(true)


    //endregion explanation card


    // region CHOOSE MODE


    const [modeCardToggle, SetModeCardToggle] = useState(false);
    const [modeSelected, SetModeSelected] = useState(null)


    // Open card after explanation

    useEffect(() => {
        if (!explanationToggle) {
            SetModeCardToggle(true);
        }
    }, [explanationToggle])

    // Mode Selected
    useEffect(() => {
        if (modeSelected)
            console.log(modeSelected)

        SetModeCardToggle(false);

    }, [modeSelected])


    // endregion choose mode


    //region SEARCH CARD ---------------


    //region toggle search card
    useEffect(() => {

        if (modeSelected) {
            console.log(modeSelected)

            SetSearchCardToggle(true);
        }


    }, [modeSelected])

    const [searchCardToggle, SetSearchCardToggle] = useState(false);


    const [searchValue, SetSearchValue] = useState(null);
    //endregion toggle search card


    //region Get search query from search card
    useEffect(() => {
        if (searchValue) {
            console.log(searchValue);

            fetchByLocation(searchValue)
                .then(data => SetMode2Data(data))
                .catch((error)=>console.log(error));

        }

    }, [searchValue, searchCardToggle])
    //endregion get search query from search

    //endregion search card


    //region RECEIVING DATA FROM API// -> MODE GET BY LOCATION (2)

    const [mode2Data, SetMode2Data] = useState(null);


    useEffect(() => {

        if (mode2Data) {

            console.log('mode2Data');
            console.log(mode2Data);


            SetResidentListCardToggle(true);
            SetSearchCardToggle(false);



        }

    }, [mode2Data])


    //endregion receiving data from api // -> mode get by location (2)


    //region RESIDENT LIST CARD

    //region toggle card

    const [residentListCardToggle, SetResidentListCardToggle] = useState(false);





    //endregion toggle card




    //endregion resident list card

    //region ERROR HANDLE

    const [error, SetError] = useState(null);



    //endregion error handle




    return (
        <div className="App">
            <div className="bg"></div>
            {explanationToggle && <ExplanationCard continueBtn={() => setExplanationToggle(false)}/>}

            {modeCardToggle && <ModeSelector setMode={(mode) => {
                SetModeSelected(mode)
            }}/>}

            {searchCardToggle && <SearchCard mode={modeSelected} SearchButtonHandle={(searchedValue) => {
                SetSearchValue(searchedValue)
            }}/>}

            {residentListCardToggle&&<ResidentsListCard/>}

        </div>
    );
}

export default App;
