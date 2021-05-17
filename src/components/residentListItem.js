import './componentsCSS/residentListItem.css'



const ResidentListItem = ({name, species, gender, status, picture})=>{







    return(

        <div className={'resident-list-item-container'}>
            <div className="image-container">
                <img src={picture} alt=""/>
            </div>
            <div className="info-container">
                <h1>Name : {name}</h1>
                <p>Species : {species}</p>
                <p>Gender: {gender}</p>
                <h6>Status: {status}</h6>
            </div>
        </div>



    )
}

export default ResidentListItem