import React,{useState} from 'react'
import TodoForm from './TodoForm'
import {FiDelete, FiEdit} from 'react-icons/fi'

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    }) // state for editing input

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ""
        })
    } // function for submitting updated todo

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    } // condition for if edit happen

    return todos.map((todo, index) => (
        <div 
        className={todo.isComplete ? "Todo-row Complete" : "Todo-row"}
        key={index}
        >
            <div 
            className="Todo-text"
            key={todo.id} 
            onClick={() =>completeTodo(todo.id)}
            >
                {todo.text}
            </div>
            <div className="Icons">
            <FiDelete 
            onClick={() => removeTodo(todo.id)}
            className="Delete-icon"
            />

            <FiEdit 
            onClick={() => setEdit({id: todo.id, value: todo.text})}
            className="Edit-icon"
            />
            </div>
        </div>
    ))
}

export default Todo
