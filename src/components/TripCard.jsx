import React from "react";

export const TripCard = ({name,imgUrl, emotional_headline, composite_price}) => {

    return (
        <div className="Card">
            <img src={imgUrl} alt={"loading..."}/>
            <div className="infoContainer">
                <h3 className="name">{name}</h3>
                <p className="headline">{emotional_headline}</p>
                <p className="price"><strong>A partir de: {composite_price}</strong></p>
            </div>
        </div>
    )
}
