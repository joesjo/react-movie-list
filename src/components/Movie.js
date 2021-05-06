function Movie(props) {
    return (
        <div>{props.title} - {props.grade} - 
            <span onClick={() => props.remove(props.id)}>X</span>
        </div>
    )
}

export default Movie