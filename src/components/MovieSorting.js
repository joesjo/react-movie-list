function MovieSorting(props) {
    return (
        <div className="sort-buttons">
            <button id="alphabetic-sort" onClick={() => props.alphabeticSort()}>Alfabetisk ordning</button>
            <button id="grade-sort" onClick={() => props.gradeSort()}>Betygsordning</button>
        </div>
    )
}

export default MovieSorting