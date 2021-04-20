import React from 'react'
import {Todoitem} from "./Todoitem";

export const Todos = (props) => {
    return (
   <div>
       <h1 className="text-center mt-3">Todo list</h1>
       
       {
       props.todos.length===0? <h3 className="text-center">Empty List</h3>:
       props.todos.map((todo)=>{
           return(<Todoitem todos={todo} key={todo.sno} onDelete={props.onDelete}/>)
       })}
        
   </div>
    )
}
Todos.defaultProps ={
    title: "enter your titile",
    sno: 0,
    desc:"enter your desc",
  
  }
  