import SearchBar from "../components/searchBar";
import {useEffect, useState} from "react";
import './CSS/SearchCard.css'

const SearchCard = ({mode})=>{

    const [image, SetImage] = useState(null)
    const [modeText, SetModeText] = useState(null)

    useEffect(()=>{
        console.log(mode);
        if(mode === 'search-by-name'){
            SetImage('../Media/rick-and-morty-characters.jpg')
            SetModeText('name')
        }

        if(mode === 'search-by-location'){
            SetImage('../Media/rick-and-morty-locations.jpeg')
            SetModeText('location')

        }



    },[mode])







    return(

        <div className={`search-card-container ${modeText}`}>

            <div className="color-adjuster">

                <h2>Make your search here!</h2>
                <h4>Searching by {modeText}</h4>
                <SearchBar />
                <button>Cancel</button>
            </div>


        </div>


    )
}

export default SearchCard