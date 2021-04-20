import React from 'react'
import{ useState } from 'react';

export const AddTodo = ({addTodo}) => {
const [title, settitle] = useState("");
const [desc, setdesc] = useState("");
const submit =(e)=>{
    e.preventDefault();
    if(!title || !desc){
        alert("title and description can not be empty");
    }
    else{
      addTodo(title,desc);
    }
}



    return (
        <div className="container my-3">

<h2 className="mb-3 text-center"> ADD A  TODO</h2>
<form onSubmit={submit}>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email Your task</label>
  <input type="name" className="form-control" value={title} onChange={(e)=>{settitle(e.target.value)}} id="exampleFormControlInput1" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Yor Task Description</label>
  <textarea className="form-control" value={desc} onChange={(e)=>{setdesc(e.target.value)}} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="button" onClick={submit} className="btn btn-outline-success">Submit</button>
</form>
        </div>
    )
}
