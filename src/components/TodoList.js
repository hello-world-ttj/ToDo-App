import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([]) // state for todo array

    const addTodo = todo => {
        if (!todo.text || /^\s+$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    } // function for adding todos

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s+$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    } // function for updating todo

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    } // function for removing todo

    const completeTodo = id => {
        let updatedTodo = todos.map(
            todo => {
                if(todo.id === id) {
                    todo.isComplete = !todo.isComplete
                }
                return todo
            }
        )
        setTodos(updatedTodo)
    } // function for completed todo

    return (
        <div>
            <h1>Add Your Task...📜</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
            todos={todos} 
            completeTodo={completeTodo} 
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList
