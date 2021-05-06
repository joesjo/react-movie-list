import MovieAppHeader from "./MovieAppHeader.js"
import MovieForm from "./MovieForm"
import MovieList from "./MovieList"
import {useState} from "react"
import {nanoid} from "nanoid"

function MovieApplication() {
    const [movieList, setMovieList] = useState([])
    const [error, setError] = useState("")

    const addMovie = (title, grade) => {
        if(title === "") {
            setError("Du måste ange en titel")
            return
        }
        if(grade === "") {
            setError("Du måste ange ett betyg")
            return
        }
        setMovieList(oldList => [...oldList, {id: nanoid(), title: title, grade: grade}])
        setError("")
    }

    const removeMovie = (targetId) => {
        setMovieList(oldList => oldList.filter(movie => movie.id !== targetId))
    }

    return (
        <div>
            <MovieAppHeader />
            <MovieForm addMovie={addMovie} errorMessage={error} />
            <MovieList movies={movieList} removeMovie={removeMovie} />
        </div>  
    )
}

export default MovieApplication