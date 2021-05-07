import imgStar from "../assets/star.png"
import imgDelete from "../assets/delete.png"

function Movie(props) {
    return (
        <div className="movie">
            <h3 className="movie-title">
                {props.title}
            </h3>
            <div className="movie-end">
                {[...Array(parseInt(props.grade))].map(() => <img class="movie-star" src={imgStar} alt="⭐" />)}
                <img class="movie-delete" src={imgDelete} alt="❌" onClick={() => props.remove(props.id)} />
            </div>
        </div>
    )
}

export default Movie