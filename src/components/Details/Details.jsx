import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Details(){
        const {id} =useParams()
        const [movie,setMovie]=useState({})
        const getMovieDetails=()=>{
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=323e3fe5a8237f5319c4b400fb4bd2d9`)
            .then(res => res.json())
            .then(json => setMovie(json))
        }
        useEffect(()=>{
            getMovieDetails()
        },[id])
    return(
        <>
        <div className=" d-flex justify-content-xl-center mt-5">
           <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="poster"></img>
            <div className="movie-details">
                <div className="box">
                    <h4 className="title">{movie.title}</h4>
                    {/* <p className="rating">{movie.vote_average}</p> */}
                </div>
                <div className="overview">
                    <h1>overview</h1>
                    {movie.overview}
                </div>
            </div>
            </div>
        </div>
            </> 
    )
}
export default Details