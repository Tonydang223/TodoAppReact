import React from 'react'
import { data } from './DataTodos'
import '../src/todos.css'
import FormTodos from './FormTodos'

const Todos = () => {
    const[todos,setTodos] = React.useState(data)
    const[edit,setEdit] = React.useState(null);
    console.log(edit)
    console.log(todos)
    const addTodo =(value) =>{
        setTodos([...todos,{id:todos.length + 1,...value}]);
    }
    const removeTodo =(id) =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const findItem= (id) =>{
        const item = todos.find(todo => todo.id === id);
        setEdit(item)
    }
    const editItem = (id,item) =>{
        const newValues = todos.map((todo)=>(todo.id === id ?{id,...item}:todo))
        setTodos(newValues);
        setEdit(null)
    }

    return (
        <div className="container">
            <h2>Todo App</h2>
            <FormTodos addTodo={addTodo} edit={edit} editItem={editItem} />
            {todos.map(todo=>(
                <div key={todo.id} className="todos-list">
                    <div className="right">
                    <p>{todo.date}</p>
                    <h3>Description: {todo.description}</h3>
                    </div>
                    <div className="between">
                    <p onClick={() =>findItem(todo.id)} className="point">(Edit tag)</p>
                    <p onClick={() =>removeTodo(todo.id)} className="point">(Remove tag)</p> 
                    </div>
                    <div className="left">
                    <p className="capitalize">Name: {todo.name}</p>
                    <p className="capitalize">Status: {todo.message}</p>  
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Todos
