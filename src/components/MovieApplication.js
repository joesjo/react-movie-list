import MovieAppHeader from "./MovieAppHeader.js"
import MovieForm from "./MovieForm"
import MovieList from "./MovieList"
import {useState, useEffect} from "react"
import {nanoid} from "nanoid"

function MovieApplication() {
    const [movieList, setMovieList] = useState(JSON.parse(localStorage.getItem("movies")) ?? [])

    const addMovie = (title, grade) => {
        setMovieList(oldList => [...oldList, {id: nanoid(), title: title, grade: grade}])
    }

    const removeMovie = (targetId) => {
        setMovieList(oldList => oldList.filter(movie => movie.id !== targetId))
    }

    useEffect(() => {
        localStorage.setItem("movies", JSON.stringify(movieList))
    }, [movieList])

    return (
        <div className="container" style={movieList.length > 0 ? {paddingBottom:"0"} : {}}>
            <MovieAppHeader />
            <MovieForm addMovie={addMovie} />
            <MovieList movies={movieList} removeMovie={removeMovie} />
        </div>  
    )
}

export default MovieApplication