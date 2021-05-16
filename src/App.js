import './App.css';


//region import VIEWS

import ExplanationCard from "./VIEWS/explanationCard";
import ModeSelector from "./VIEWS/modeSelector";
import SearchCard from "./VIEWS/searchCard";
import Mode1ResidentsCardList from "./VIEWS/Mode1ResidentsCardList";

//endregion import views

//region import SERVICES

import fetchByLocation from "./services/fetchByLocation";
import fetchResidentsById from "./services/fetchResidentsById";
import auxDataApi from "./services/AuxDataApi";

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
                .then(data => SetMode2Data(data.results[0]))
                .catch((error)=>console.log(error));

        }

    }, [searchValue, searchCardToggle])
    //endregion get search query from search

    //endregion search card


    //region RECEIVING DATA FROM API// -> MODE GET BY LOCATION (2)


    //region getting info based on search input
    const [mode2Data, SetMode2Data] = useState(null);

    const [residentsIds, SetResidentsId] = useState(null)

    useEffect(() => {

        if (mode2Data) {


            let residentsIds = '';
            mode2Data.residents.forEach((element)=>{
                residentsIds+= ',' + (element.slice(42, element.length));
            })

            SetResidentsId(residentsIds);





            SetSearchCardToggle(false);



        }

    }, [mode2Data])

    //endregion getting info based on search input


    //region Fixing url issues

    const [residentsData, SetResidentsData] = useState(null)
    useEffect(()=>{

        if(residentsIds){

            fetchResidentsById(residentsIds)
                .then(data=>SetResidentsData(data))



            SetResidentListCardToggle(true);
        }
    },[residentsIds])


    //endregion fixing url issues



    //endregion receiving data from api // -> mode get by location (2)


    //region RECEIVING DATA FROM AUX API

    const [auxData, SetAuxData] = useState(null)

    useEffect(()=>{
        SetAuxData(auxDataApi)

        // console.log(auxData)
    },[])


    //endregion receiving data from aux api


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

            {residentListCardToggle&&<Mode1ResidentsCardList data={residentsData}/>}

        </div>
    );
}

export default App;
