import './App.css';


//region import VIEWS

import ExplanationCard from "./VIEWS/explanationCard";
import ModeSelector from "./VIEWS/modeSelector";
import SearchCard from "./VIEWS/searchCard";
import Mode2ResidentsCardList from "./VIEWS/Mode2ResidentsCardList";

//endregion import views

//region import SERVICES

import fetchByLocation from "./services/fetchByLocation";
import fetchResidentsById from "./services/fetchResidentsById";
import fetchByName from "./services/fetchByName";
import AuxDataAPi from "./services/AuxDataApi";

//endregion import services

import {useEffect, useState} from "react";
import Mode1DisplayInfoCard from "./VIEWS/Mode1DisplayInfoCard";


function App() {

    //region EXPLANATION CARD

    const [explanationToggle, SetShowExplanationToggle] = useState(false)

    useEffect(()=>{

        const isStored = sessionStorage.getItem('opened');
        console.log(isStored);
        // NOT THE FIRST TIME
        if(isStored=== 'opened'){
            SetShowExplanationToggle(false);
            SetModeCardToggle(true);

            console.log('not the first time')
        }

        //THE FIRST TIME
        else {
            sessionStorage.setItem('opened', 'opened');
            SetShowExplanationToggle(true);

        }
    },[])


    
    //endregion explanation card


    // region CHOOSE MODE


    const [modeCardToggle, SetModeCardToggle] = useState(false);
    const [modeSelected, SetModeSelected] = useState(null)


    // Open card after explanation

    useEffect(() => {
        if (!explanationToggle) {
            SetModeCardToggle(true);

            console.log('show modeCardToggle ' + modeCardToggle)
        }
    }, [explanationToggle, modeCardToggle])

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


    //region Set search query from search card DEPENDING ON MODE
    useEffect(() => {
        //region BY LOCATION MODE --------------------------->>>
        if (modeSelected === 'search-by-location') {
            if (searchValue) {
                console.log(searchValue);

                fetchByLocation(searchValue)
                    .then(data => SetMode2Data(data.results[0]))
                    .catch((error) => console.log(error));

            }
        }

        //endregion BY LOCATION MODE --------------------------->>>


        //region BY NAME MODE --------------------------->>>

        if (modeSelected === 'search-by-name') {

            if (searchValue) {

                const Query = splitUserInput(searchValue)[0];

                const Details = splitUserInput(searchValue)[1];

                console.log(Query, Details)

                // FETCH!
                fetchByName(Query)
                    .then(data=>{

                        if(Details === 0){
                            SetMode1Data(data.results[Details]);
                        }

                        else{

                            SetMode1Data((data.results.filter((item)=>item.name === Details))[0])
                        }


                        }
                    );

            }


        }
        // Splits user inputs and return query and details for the search
        function splitUserInput(data){

            const splitInput = data.split(' ')

            // More than 1 name
            // Return [urlQuery, comparisonSample]
            if(splitInput.length > 1){


                let urlQuery =  splitInput[0];

                let comparisonSample = (splitInput[0][0].toUpperCase()) + (splitInput[0].slice(1, splitInput[0].length));

                for (let i = 1; i < splitInput.length; i++) {

                    comparisonSample += ' ' + (splitInput[i][0].toUpperCase()) + (splitInput[i].slice(1, splitInput[i].length))
                    urlQuery += '&'+ splitInput[i];
                }

                return [urlQuery, comparisonSample];

            }

                // Only 1 name
            //return, [urlQuery, 0<index of first result>

            else{
                console.log('menos de 1')

                const urlQuery = data;

                return [urlQuery, 0]

            }
        }

        //endregion BY NAME MODE --------------------------->>>

    }, [searchValue, searchCardToggle, modeSelected])









    //endregion set search query from search card

    //endregion search card

    //region RECEIVING DATA FROM API// --> MODE GET BY NAME (MODE 1)


    const [mode1Data, SetMode1Data] = useState(null);

    useEffect(() => {

        if(mode1Data){

            console.log(mode1Data)

            const result = [AuxDataAPi(mode1Data.name), mode1Data]

            console.log(result);

            SetCard1Data(result)
            SetSearchCardToggle(false);
            SetMode1CardToggle(true);

        }

    }, [mode1Data])


    //endregion receiving data from api// --> mode get by name (mode1)


    //region MODE1 CARDS

const [mode1CardToggle, SetMode1CardToggle] = useState(false);

const [card1Data, SetCard1Data] = useState(null)





    //endregion mode1 cards



    //region RECEIVING DATA FROM API// -> MODE GET BY LOCATION (MODE 2)


    //region getting info based on search input
    const [mode2Data, SetMode2Data] = useState(null);

    const [residentsIds, SetResidentsId] = useState(null)

    useEffect(() => {

        if (mode2Data) {


            let residentsIds = '';
            mode2Data.residents.forEach((element) => {
                residentsIds += ',' + (element.slice(42, element.length));
            })

            SetResidentsId(residentsIds);


            SetSearchCardToggle(false);


        }

    }, [mode2Data])

    //endregion getting info based on search input


    //region Fixing url issues

    const [residentsData, SetResidentsData] = useState(null)
    useEffect(() => {

        if (residentsIds) {

            fetchResidentsById(residentsIds)
                .then(data => SetResidentsData(data))


            SetResidentListCardToggle(true);
        }
    }, [residentsIds])


    //endregion fixing url issues


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
            {explanationToggle && <ExplanationCard continueBtn={() => SetShowExplanationToggle(false)}/>}

            {modeCardToggle && <ModeSelector setMode={(mode) => {
                SetModeSelected(mode)
            }}/>}

            {searchCardToggle && <SearchCard mode={modeSelected} SearchButtonHandle={(searchedValue) => {
                SetSearchValue(searchedValue)
            }}/>}

            {residentListCardToggle && <Mode2ResidentsCardList data={residentsData}/>}


            {mode1CardToggle && <Mode1DisplayInfoCard data={card1Data}/>}

        </div>
    );
}

export default App;
