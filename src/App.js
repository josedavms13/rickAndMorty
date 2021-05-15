import './App.css';
// import SearchBar from "./components/searchBar";
import {useEffect, useState} from "react";
// import getApiInfo from "./services/getApiInfo";
import ExplanationCard from "./components/explanationCard";
import ModeSelector from "./components/modeSelector";

function App() {

    //region EXPLANATION CARD
    //////// CHANGE WHEN FINISH TO TRUE
    const [explanationToggle, setExplanationToggle] = useState(true)


    //endregion explanation card


    // region CHOOSE MODE


    const [modeCardToggle, setModeCardToggle] = useState(false);
    const [modeSelected , SetModeSelected] = useState(null)


    // Open card after explanation

    useEffect(()=>{
        if(!explanationToggle){
            setModeCardToggle(true);
        }
    },[explanationToggle])

    // Mode Selected
    useEffect(()=>{
        if(modeSelected)
        console.log(modeSelected)

        setModeCardToggle(false);

    },[modeSelected])




    // endregion choose mode




    //region SEARCHBAR ---------------
    // const [searchValue, setSearchValue] = useState('');
    //
    // useEffect(()=>{
    //
    //     // console.log(searchValue);
    //
    // },[searchValue])
    //endregion searchbar






  return (
    <div className="App">

        {explanationToggle && <ExplanationCard continueBtn={()=>setExplanationToggle(false)}/>}

        {modeCardToggle&&<ModeSelector setMode={(mode) => {
            SetModeSelected(mode)
        }}/>}

    </div>
  );
}

export default App;
