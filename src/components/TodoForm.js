import React,{useState, useEffect, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '') // state for input

    const inputRef = useRef(null) // useRef for input focus

    useEffect(() => { 
        inputRef.current.focus()
    }) // useEffect for input focus

    const handleChange = event => {
        setInput(event.target.value)
    } // function for input change

    const handleSubmit = event => {
        event.preventDefault()
        props.onSubmit({
            id: uuidv4(),
            text: input
        })
        setInput('')
    } // function submit form


    return (
        <form className="Todo-form" onSubmit={handleSubmit}>
            {
            props.edit ?
            (
            <>
            <input 
                type="text" 
                placeholder="Update Your Task...🖊" 
                value={input}
                name="text"
                className="Todo-input Edit"
                onChange={handleChange}
                ref={inputRef}
            />
                <button onClick={handleSubmit} className="Todo-btn Edit">Update</button>
            </>
            ) :
            (
            <>
            <input 
                type="text" 
                placeholder="Add Your Task...🖊" 
                value={input}
                name="text"
                className="Todo-input"
                onChange={handleChange}
                ref={inputRef}
            />
                <button onClick={handleSubmit} className="Todo-btn">Add ToDo</button>
            </>
            )
            }
        </form>
    )
}

export default TodoForm
