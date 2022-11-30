import React from "react";

export default function Card(props) {
    const { id, name, image, rating, location, price } = props.item
    console.log(price)
    return (
        (
            <div className="card">
                <img className="card--image" src={image} />

                <p className="card--activity">{name}</p>

                <div className="card--rating">
                    <span className="span--rating--stars">{rating.score} <i className="fa-sharp fa-solid fa-star"></i></span>
                    <span>based on&nbsp;<span className="span--rating--count">{rating.count}</span>&nbsp;reviews</span>
                </div>

                <hr className="sep--upper" />
                <p className="span--location"><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;{location}</p>
                <hr className="sep--lower" />

                <p className="card--price">{
                    price !== undefined && typeof price.value === "number" && price.currency !== undefined ?
                    price.currency + price.value.toFixed(2) : "Free"
                }</p>
            </div>

        )
    )
}