import { useState, useEffect } from 'react';
import axios from 'axios'
import './styles.css'


const movieImage = import.meta.env.VITE_Movie_Image;
//C:\Users\ADMIN\Desktop\Protalento\Desarrollo-Web\04_Intro a frontend con REACT.JS\4.4_Movies_App\Movies-Api\public\no_image.png
//C:\Users\ADMIN\Desktop\Protalento\Desarrollo-Web\04_Intro a frontend con REACT.JS\4.4_Movies_App\Movies-Api\src\components\Movie\index.jsx
function Movie( {movieData} ) {

    return (
        <div className='card'>
            {
                movieData.imageUrl === null ? (
                    <img src='../../../public/no_image.png' alt="No image available" />
                ) : (
                    <img src={`${movieImage}${movieData.imageUrl}`} alt={movieData.name} />
                )
            }
            <div className='info'>
                <h3>{movieData.name}</h3>
                <p>{movieData.date}</p>
                <p>{movieData.vote}</p>
            </div>
        </div>
    )
}

export default Movie