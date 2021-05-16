import {useEffect, useState} from "react";
import ResidentListItem from "../components/residentListItem";


const ResidentsListCard = ({data})=>{


    useEffect(()=>{
        console.log(data);
    },[data])









    return(


        <div className={'resident-list-container'}>


            <ResidentListItem />
        </div>





    )
}

export default ResidentsListCard