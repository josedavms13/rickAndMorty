import './componentsCSS/searchBar.css'

import {useState} from "react";


const SearchBar = ({SearchButtonHandle})=>{

    const [searchBarValue, setSearchBarValue] = useState('');


    function setOrResetInputValues(){
        SearchButtonHandle(searchBarValue.toLowerCase())
        setSearchBarValue('');
    }

    function reset(){

        window.location.reload();
    }

    return(

        <div className={'search-bar'}>


            <div className="input-button-container">
                <input value={searchBarValue} type="text" name={'search-input'} onChange={(e)=>setSearchBarValue(e.target.value)}/>
               <div className="buttons-div">

                   <button onClick={()=> {
                       setOrResetInputValues()
                   }}>Search!</button>
                   <button onClick={reset}>Cancel</button>
               </div>
            </div>



        </div>



    )
}

export default SearchBar