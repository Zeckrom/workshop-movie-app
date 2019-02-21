import React from 'react'

import './movieCard.scss'

const ratingToStars = (number) => {
    const result = []
    for (let index = 0; index < number; index++) {
        result.push(
            <span className="gold">*</span>
        ) 
    }
    while (result.length < 5) {
        result.push(
            <span>*</span>
        )
    }
    return result
}

const MovieCard = (props) => {
    const {rating, image, title, releaseDate} = props
    return (
        <div className="movie-card">
            <div className="rating">
                {
                    ratingToStars(rating)
                }
            </div>
            <div className="image-container">
                <img alt="movie image" src={image} />
            </div>
            <div>
                <span>{title}</span>
                <span>{releaseDate}</span>
            </div>
        </div>
    )
}

export default MovieCard