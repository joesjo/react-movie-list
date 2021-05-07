import Movie from "./Movie"

function MovieList (props) {
    return (
        <div className="movieList">
            {props.movies.map(movie => (
                <Movie 
                    id={movie.id} 
                    title={movie.title} 
                    grade={movie.grade} 
                    remove={props.removeMovie} 
                />
            ))}
        </div>
    )
}

export default MovieList