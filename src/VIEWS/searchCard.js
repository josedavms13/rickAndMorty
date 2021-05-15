import SearchBar from "../components/searchBar";
import {useEffect, useState} from "react";
import './ViewCSS/SearchCard.css'

const SearchCard = ({mode, SearchButtonHandle})=>{

    const [modeText, SetModeText] = useState(null)

    const [locationModeExplanationToggle, SetLocationModeExplanationToggle] = useState(false);

    useEffect(()=>{
        console.log(mode);
        if(mode === 'search-by-name'){
            SetModeText('name')
        }

        if(mode === 'search-by-location'){
            SetModeText('location')
            // SetLocationModeExplanationToggle(true);
        }

    },[mode])



    return(

        <div className={`search-card-container ${modeText}`}>

            <div className="color-adjuster">
                {locationModeExplanationToggle &&
                <div className={'dimension-explaining-card'}>
                    <h5>If you want to include dimension searching type a -* and the name of dimension</h5>
                    <p>Ex: Earth -* Replacement Dimension</p>
                    <p>Ex2: Earth -* Dimension C-137</p>
                </div>
                }
            </div>

            <h2>Make your search here!</h2>
            <h4>Searching by {modeText}</h4>
            <SearchBar SearchButtonHandle={SearchButtonHandle}/>



            <button>Cancel</button>


        </div>


    )
}

export default SearchCard