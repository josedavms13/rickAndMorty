import './ViewCSS/modeSelector.css'

const ModeSelector = ({setMode}) => {

    return (


        <div className={'mode-selection-container'}>

            <h2>Which search method would you like to use?</h2>
            <div className="button-container">

                <button className={'search-by-name-btn'} value={'search-by-name'} onClick={(e) => setMode(e.target.value)}>Search by Name</button>
                <button className={'search-by-location-btn'} value={'search-by-location'} onClick={(e) => setMode(e.target.value)}>Search by Location</button>
            </div>
            <div className="choose-info">

                <p className={'search-by-name-text'}>If you choose search by location, data displayed will be the last in the future that the system can handle.</p>
                <p className={'search-by-location-text'}>If you choose search by Name, data displayed will be related with present time. </p>
            </div>

        </div>

    )
}


export default ModeSelector