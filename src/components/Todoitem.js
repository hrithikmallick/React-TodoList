import React from 'react'

export const Todoitem = ({todos,onDelete}) => {
    return (
        <div className="container mt-3">
            <h4>{todos.title}</h4>
            <p>{todos.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todos)}}>Delete</button>
        </div>
    )
}
