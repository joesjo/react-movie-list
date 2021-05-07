import {useState} from "react"

function MovieForm(props) {
    const [title, setTitle] = useState("")
    const [grade, setGrade] = useState("")
    const [inputStyle, setInputStyle] = useState({})
    const [selectStyle, setSelectStyle] = useState({})

    const errorBorder = {border: "1px solid red"}

    const submit = (e) => {
        e.preventDefault()
        if(title === "") {
            setInputStyle(errorBorder)
            return
        }
        setInputStyle({})
        if(grade === "") {
            setSelectStyle(errorBorder)
            return
        }
        setSelectStyle({})
        props.addMovie(title, grade)
        setTitle("")
        setGrade("")
    }

    return (
        <div className="form-div">
            <form>
                <input style={inputStyle} type="text" name="title" placeholder="Filmtitel" value={title} onChange={e => setTitle(e.target.value)} />
                <select style={selectStyle} value={grade} onChange={e => setGrade(e.target.value)}>
                    <option value="">--Välj betyg--</option>
                    <option value="1" >⭐</option>
                    <option value="2" >⭐⭐</option>
                    <option value="3" >⭐⭐⭐</option>
                    <option value="4" >⭐⭐⭐⭐</option>
                    <option value="5" >⭐⭐⭐⭐⭐</option>
                </select>
                <button onClick={submit}>Lägg till</button>
            </form>
            <span>{props.errorMessage}</span>
        </div>
    )
}

export default MovieForm