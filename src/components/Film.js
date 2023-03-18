import React from 'react'
import './Film.css'

const Film = ({ poster, title, year, actors, genre, imdbRating, metascore, plot, }) => {
    return (
        <div className='film'>
            <h2>{title}</h2>
            <div className="flex">
                <div className="img-div">
                    <img src={poster} alt="" />
                </div>
                <div className="right">
                    <p>Plot: {plot}</p>
                    <p>Year: {year}</p>
                    <p>Actors: {actors}</p>
                    <p>Genre: {genre}</p>
                    <div className="ratings">
                        <p>Imdbs rating: {imdbRating}</p>
                        <p>Metascore: {metascore}</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Film
