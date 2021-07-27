import React, {useEffect, useState} from "react";
import axios from "axios";
import {TripCard} from "./TripCard.jsx"

export const CardContainer = ()=> {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        axios.get("https://api-staging.venturatravel.org/trips/?limit=4").then((result) =>{
            console.log(result)
            setInfo(result.data.data);
            setLoading(false)
        })
    
    },[])

    return (
        <div className="CardContainer">
            {!loading && info.map(travel => 
                <TripCard 
                imgUrl={"https://cdn.viventura.info/img/160x120/" + travel.photos[0].filename} 
                name={travel.name}
                emotional_headline={travel.emotional_headline}
                composite_price={travel.composite_price.price}
                />)}
        </div>
    )

}

