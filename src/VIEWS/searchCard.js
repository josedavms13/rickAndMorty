import SearchBar from "../components/searchBar";
import {useEffect, useState} from "react";
import './ViewCSS/SearchCard.css'

const SearchCard = ({mode, SearchButtonHandle})=>{

    const [modeText, SetModeText] = useState(null)

    const [locationModeExplanationToggle, SetLocationModeExplanationToggle] = useState(false);

    useEffect(()=>{
        if(mode === 'search-by-name'){
            SetModeText('name')
        }

        if(mode === 'search-by-location'){
            SetModeText('location')
            SetLocationModeExplanationToggle(true);
        }

    },[mode])




    return(

        <div className={`search-card-container ${modeText}`}>

            <div className="color-adjuster"> </div>
            <div className="search-card-block">

                <h2>Search here!</h2>

                <div className="main-card-form">

                    <h4>Searching by {modeText}</h4>
                    <SearchBar SearchButtonHandle={SearchButtonHandle}/>
                </div>


                {locationModeExplanationToggle &&
                <div className={'dimension-explaining-card'}>
                    <h5>If you want to include dimension in your search, add *- and the name of dimension</h5>
                    <p>Ex: Earth *- Replacement Dimension</p>
                    <p>Ex2: Earth *- Dimension C-137</p>
                </div>
                }




            </div>




        </div>


    )
}

export default SearchCard