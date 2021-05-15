import './App.css';
import {useEffect, useState} from "react";
// import getApiInfo from "./services/getApiInfo";
import ExplanationCard from "./VIEWS/explanationCard";
import ModeSelector from "./VIEWS/modeSelector";
import SearchCard from "./VIEWS/searchCard";

function App() {

    //region EXPLANATION CARD
    const [explanationToggle, setExplanationToggle] = useState(true)


    //endregion explanation card


    // region CHOOSE MODE


    const [modeCardToggle, SetModeCardToggle] = useState(false);
    const [modeSelected , SetModeSelected] = useState(null)


    // Open card after explanation

    useEffect(()=>{
        if(!explanationToggle){
            SetModeCardToggle(true);
        }
    },[explanationToggle])

    // Mode Selected
    useEffect(()=>{
        if(modeSelected)
        console.log(modeSelected)

        SetModeCardToggle(false);

    },[modeSelected])




    // endregion choose mode




    //region SEARCH CARD ---------------

    useEffect(()=>{

        if(modeSelected) {
            console.log(modeSelected)

            SetSearchCardToggle(true);
        }


    },[modeSelected])

    const [searchCardToggle, SetSearchCardToggle] = useState(false);


    const [searchValue, setSearchValue] = useState('');


    //Got search query from search card
    useEffect(()=>{

        console.log(searchValue);

    },[searchValue])

    //endregion search card






  return (
    <div className="App">

        {explanationToggle && <ExplanationCard continueBtn={()=>setExplanationToggle(false)}/>}

        {modeCardToggle&&<ModeSelector setMode={(mode) => {
            SetModeSelected(mode)
        }}/>}

        {searchCardToggle&&<SearchCard mode={modeSelected}/>}

    </div>
  );
}

export default App;
