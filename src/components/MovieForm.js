import {useState} from "react"

function MovieForm(props) {
    const [title, setTitle] = useState("")
    const [grade, setGrade] = useState("")

    const submit = (e) => {
        e.preventDefault()
        props.addMovie(title, grade)
        setTitle("")
        setGrade("")
    }

    return (
        <div>
            <form>
                <input type="text" name="title" placeholder="Filmtitel" value={title} onChange={e => setTitle(e.target.value)} />
                <select value={grade} onChange={e => setGrade(e.target.value)}>
                    <option value="">--Välj betyg--</option>
                    <option value="1" >1</option>
                    <option value="2" >2</option>
                    <option value="3" >3</option>
                    <option value="4" >4</option>
                    <option value="5" >5</option>
                </select>
                <button onClick={submit}>Lägg till</button>
            </form>
            <span>{props.errorMessage}</span>
            <hr />
        </div>
    )
}

export default MovieForm