import React, { useState,useEffect } from 'react'
import '../src/todos.css'

const FormTodos = ({addTodo,edit,editItem}) => {
    const [value,setValue] = React.useState({
        description:'',
        name:'',
        message:'',
        date:'',
    })
    const onSubmit =(e)=>{
        e.preventDefault();
        if(value.description === ''||  value.name === '' || value.message === ''
        ) return alert("Input Field is not empty")
        else if(value.name.length >= 6)
        return  alert("Name is not than 6 characters")
        else{
            if(!edit){
                addTodo(value);
                setValue({     
                    description:'',
                    name:'',
                    message:'',});
            }
            else{
                editItem(edit.id,value);
                setValue({     
                    description:'',
                    name:'',
                    message:'',});
            }

        }
    }
    const today = new Date();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "October", "Nov", "Dec"];
    const date = today.getFullYear() + '-' + (months[today.getMonth()]) + '-' + today.getDate()+'--'+ today.toLocaleTimeString();
    const onChange = (e)=>{
    setValue({...value,[e.target.name]: e.target.value, date: date})
    }
    useEffect(() => {
        if(edit){
            setValue({
                id:edit.id,
                description:edit.description,
                name:edit.name,
                message:edit.message,
            });
        }
        else{
            setValue({
                description:'',
                name:'',
                message:'',
            })
        }}, [edit])
    return (
        <div className="form-container">
            <form className="form" onSubmit={onSubmit}>
                <label htmlFor="name" className="label">Description</label>
                <input type="name" name="description" value={value.description}  className="form-control" onChange={onChange}/>
                <br/>
                <label htmlFor="age" className="label margin-label2">Name</label>
                <input type="age" name="name" value={value.name} className="form-control move " onChange={onChange}/>
                <br/>
                <div className="bottom">
                <select name="message" value={value.message} onChange={onChange} className="select">
                <option value='' selected disabled hidden className="point">Status</option>
                <option>Success</option>
                <option>Fail</option>
                </select>
                <br/>
                <button type="submit" className="btn">{edit?"EDIT":"ADD"}</button>
                </div>
            </form>
        </div>
    )
}

export default FormTodos
