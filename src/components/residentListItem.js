import './componentsCSS/residentListItem.css'



const ResidentListItem = ()=>{







    return(

        <div className={'resident-list-item-container'}>
            <div className="image-container">
                <img src="" alt=""/>
            </div>
            <div className="info-container">
                <h5>Name : Jose</h5>
                <p>Species : Human</p>
                <p>Gender: Male</p>
                <h6>Status: Alive</h6>
            </div>
        </div>



    )
}

export default ResidentListItem