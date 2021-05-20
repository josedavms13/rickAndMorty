import './componentsCSS/residentListItem.css'
import {useEffect, useState} from "react";



const ResidentListItem = ({url})=>{


    const [name, SetName]= useState(null);
    const [species, SetSpecies]= useState(null);
    const [gender, SetGender]= useState(null);
    const [status, SetStatus]= useState(null);
    const [picture, SetPicture] = useState(null)


useEffect(()=>{
    if(url){
    fetch(url)
        .then(response=> response.json())
        .then((data)=>{
            SetName(data.name);
            SetSpecies(data.species);
            SetGender(data.gender);
            SetStatus(data.status);
            SetPicture(data.image);
        })}
},[url])





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