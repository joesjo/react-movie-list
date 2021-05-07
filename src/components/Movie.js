import imgStar from "../assets/star.png"
import imgDelete from "../assets/delete.png"

function Movie(props) {
    return (
        <div className="movie">
            <h3 className="movie-title">
                {props.title}
            </h3>
            <div className="movie-end">
                <img class="movie-delete" src={imgDelete} alt="X" onClick={() => props.remove(props.id)} />
            </div>
        </div>
    )
}

export default Movie