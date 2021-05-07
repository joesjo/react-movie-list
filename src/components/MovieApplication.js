import MovieAppHeader from "./MovieAppHeader"
import MovieForm from "./MovieForm"
import MovieList from "./MovieList"
import MovieSorting from "./MovieSorting"
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

    const alphabeticSort = () => {
        setMovieList(oldList => [...oldList.sort((a, b) => (a.title > b.title) ? 1 : -1)])
    }

    const gradeSort = () => {
        setMovieList(oldList => [...oldList.sort((a, b) => (a.grade < b.grade) ? 1 : -1)])
    }

    useEffect(() => {
        localStorage.setItem("movies", JSON.stringify(movieList))
    }, [movieList])

    return (
        <div className="container">
            <MovieAppHeader />
            <MovieForm addMovie={addMovie} />
            <MovieList movies={movieList} removeMovie={removeMovie} />
            <MovieSorting alphabeticSort={alphabeticSort} gradeSort={gradeSort}/>
        </div>  
    )
}

export default MovieApplication