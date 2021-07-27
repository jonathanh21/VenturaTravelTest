import React from "react";

export const TripCard = ({name,imgUrl, emotional_headline, composite_price}) => {

    return (
        <div>
            <img src={imgUrl} alt={"loading..."}/>
            <h3>{name}</h3>
            <p>{emotional_headline}</p>
            <p>{composite_price}</p>
        </div>
    )
}
