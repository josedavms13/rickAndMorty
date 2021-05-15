import '../CSS/modeSelector.css'

const ModeSelector = ({setMode}) => {

    return (


        <div className={'mode-selection-container'}>

            <label htmlFor="selection-mode">Which spy method would you like to use?</label>
            <div className="button-container">

                <button value={'search-by-name'} onClick={(e) => setMode(e.target.value)}>Search by Name</button>
                <button value={'search-by-location'} onClick={(e) => setMode(e.target.value)}>Search by Location</button>
            </div>

        </div>

    )
}


export default ModeSelector