import './componentsCSS/searchBar.css'

import {useState} from "react";


const SearchBar = ({SearchButtonHandle})=>{

    const [searchBarValue, setSearchBarValue] = useState('');


    function setOrResetInputValues(){
        SearchButtonHandle(searchBarValue.toLowerCase())
        setSearchBarValue('');
    }

    return(

        <div className={'search-bar'}>


            <div className="input-button-container">
                <input value={searchBarValue} type="text" name={'search-input'} onChange={(e)=>setSearchBarValue(e.target.value)}/>
                <button onClick={()=> {
                    setOrResetInputValues()
                }}>Search!</button>
            </div>



        </div>



    )
}

export default SearchBar