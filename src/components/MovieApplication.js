import MovieAppHeader from "./MovieAppHeader.js"
import MovieForm from "./MovieForm"
import MovieList from "./MovieList"
import {useState} from "react"
import {nanoid} from "nanoid"

function MovieApplication() {
    const [movieList, setMovieList] = useState([])

    const addMovie = (title, grade) => {
        setMovieList(oldList => [...oldList, {id: nanoid(), title: title, grade: grade}])
    }

    const removeMovie = (targetId) => {
        setMovieList(oldList => oldList.filter(movie => movie.id !== targetId))
    }

    return (
        <div className="container">
            <MovieAppHeader />
            <MovieForm addMovie={addMovie} />
            <MovieList movies={movieList} removeMovie={removeMovie} />
        </div>  
    )
}

export default MovieApplication