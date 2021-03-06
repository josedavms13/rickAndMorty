import './App.css';


//region import VIEWS

import ExplanationCard from "./VIEWS/explanationCard";
import ModeSelector from "./VIEWS/modeSelector";
import SearchCard from "./VIEWS/searchCard";
import Mode2ResidentsCardList from "./VIEWS/Mode2ResidentsCardList";

//endregion import views

//region import SERVICES

import fetchByLocation from "./services/fetchByLocation";
import fetchByName from "./services/fetchByName";
import AuxDataAPi from "./services/AuxDataApi";

//endregion import services

import {useEffect, useState} from "react";
import Mode1DisplayInfoCard from "./VIEWS/Mode1DisplayInfoCard";


function App() {

    //region EXPLANATION CARD

    // Set if is the first time the user opens the app
    const [isFirstTime, SetIsFirstTime] = useState(null)
    useEffect(() => {

        if (sessionStorage.length > 0) {
            SetIsFirstTime(false);
        } else {
            SetIsFirstTime(true);
            sessionStorage.clear();
            sessionStorage.setItem('open', 'open');
        }
    }, [])


    useEffect(() => {


        if(isFirstTime !== null){

            if (!isFirstTime) {
                SetModeCardToggle(true);
                SetShowExplanationToggle(false);

            } else {
                SetShowExplanationToggle(true);
            }
        }
    }, [isFirstTime])

    const [explanationToggle, SetShowExplanationToggle] = useState(false)


    //endregion explanation card


    // region CHOOSE MODE


    const [modeCardToggle, SetModeCardToggle] = useState(false);
    const [modeSelected, SetModeSelected] = useState(null)


    // Open card after explanation

    const [closedCard, CheckClosedCard] = useState(null)

    useEffect(()=>{


        if(closedCard!== null){
            SetShowExplanationToggle(false);
            SetModeCardToggle(true);
        }

    },[closedCard])


    // Mode Selected
    useEffect(() => {
        if (modeSelected)

        SetModeCardToggle(false);

    }, [modeSelected])


    // endregion choose mode


    //region SEARCH CARD ---------------


    //region toggle search card
    useEffect(() => {

        if (modeSelected) {

            SetSearchCardToggle(true);
        }


    }, [modeSelected])

    const [searchCardToggle, SetSearchCardToggle] = useState(false);


    const [searchValue, SetSearchValue] = useState(null);
    //endregion toggle search card


    //region Set search query from search card DEPENDING ON MODE
    useEffect(() => {
        //region BY LOCATION MODE --------------------------->>>
        if (modeSelected === 'search-by-location') {
            if (searchValue) {

                fetchByLocation(searchValue)
                    .then(data => SetMode2Data(data.results[0]))

            }
        }

        //endregion BY LOCATION MODE --------------------------->>>


        //region BY NAME MODE --------------------------->>>

        if (modeSelected === 'search-by-name') {

            if (searchValue) {

                const Query = splitUserInput(searchValue)[0];

                const Details = splitUserInput(searchValue)[1];


                // FETCH!
                fetchByName(Query)
                    .then(data => {

                            if (Details === 0) {
                                SetMode1Data(data.results[Details]);
                            } else {

                                SetMode1Data((data.results.filter((item) => item.name === Details))[0])
                            }


                        }
                    );

            }


        }

        // Splits user inputs and return query and details for the search
        function splitUserInput(data) {

            const splitInput = data.split(' ')

            // More than 1 name
            // This returns [urlQuery, comparisonSample]
            if (splitInput.length > 1) {


                let urlQuery = splitInput[0];

                let comparisonSample = (splitInput[0][0].toUpperCase()) + (splitInput[0].slice(1, splitInput[0].length));

                for (let i = 1; i < splitInput.length; i++) {

                    comparisonSample += ' ' + (splitInput[i][0].toUpperCase()) + (splitInput[i].slice(1, splitInput[i].length))
                    urlQuery += '&' + splitInput[i];
                }

                return [urlQuery, comparisonSample];

            }

                // Only 1 name
            // This returns [urlQuery, 0<index of first result>

            else {

                const urlQuery = data;

                return [urlQuery, 0]

            }
        }

        //endregion BY NAME MODE --------------------------->>>

    }, [searchValue, searchCardToggle, modeSelected])


    //endregion set search query from search card

    //endregion search card

    //region RECEIVING DATA FROM API --> MODE GET BY NAME (MODE 1)


    const [mode1Data, SetMode1Data] = useState(null);

    useEffect(() => {

        if (mode1Data) {


            const result = [AuxDataAPi(mode1Data.name), mode1Data]

            SetCard1Data(result)
            SetSearchCardToggle(false);
            SetMode1CardToggle(true);

        }

    }, [mode1Data])


    //endregion receiving data from api --> mode get by name (mode1)


    //region MODE1 CARDS

    const [mode1CardToggle, SetMode1CardToggle] = useState(false);

    const [card1Data, SetCard1Data] = useState(null)


    //endregion mode1 cards


    //region RECEIVING DATA FROM API -> MODE GET BY LOCATION (MODE 2)


    //region getting info based on search input
    const [mode2Data, SetMode2Data] = useState(null);
    const [mode2Urls, SetMode2Urls] = useState(null);

    useEffect(() => {

        if (mode2Data) {

            SetMode2Urls(mode2Data)


            SetSearchCardToggle(false);


        }

    }, [mode2Data])

    //endregion getting info based on search input


    //endregion receiving data from api  -> mode get by location (2)



    return (
        <div className="App">
            <div className="bg"></div>
            {explanationToggle && <ExplanationCard continueBtn={() => CheckClosedCard(false)}/>}

            {modeCardToggle && <ModeSelector setMode={(mode) => {
                SetModeSelected(mode)
            }}/>}

            {searchCardToggle && <SearchCard mode={modeSelected} SearchButtonHandle={(searchedValue) => {
                SetSearchValue(searchedValue)
            }}/>}

            {mode2Urls && <Mode2ResidentsCardList urls={mode2Urls}/>}


            {mode1CardToggle && <Mode1DisplayInfoCard data={card1Data}/>}

        </div>
    );
}

export default App;
