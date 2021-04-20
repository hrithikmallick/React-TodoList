// import logo from './logo.svg';
// import './App.css';
import Header from "./components/Header";
import {Todos} from "./components/Todos";
import {Footer} from "./components/Footer";
import {AddTodo} from "./components/AddTodo";
import {About} from "./components/About";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";;


function App() {
  const onDelete = (todo)=>{
    console.log("clicked",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const addTodo =(title,desc)=>{
    console.log("i am adding todo",title,desc);
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{sno =todos[todos.length-1].sno+1;}
 
    const mytodo ={
      sno:sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,mytodo]);
    // console.log(mytodo);


  }
  const[todos,setTodos]  =useState([
    // {
    //   sno:1,
    //   title:"Go to market",
    //   desc:"you have to go to the market"
    // },
    // {
    //   sno:2,
    //   title:"Go to mall",
    //   desc:"Go to the shoping mall"
    // }
  ]);
  return (
    <>
    <Router>
    <Header title="Todo List"  seacrhBar={true}/> 


    <Switch>
          <Route exact path="/" render={()=>{
            return(  <> <AddTodo addTodo={addTodo}/>;
              <Todos todos={todos} onDelete={onDelete}/>;
              </>)
          }}>
            
          </Route>
          
          <Route exact path="/about" render={()=>{
            return(  <> 
            <About/>
              </>)
          }}>
            
          </Route>
    </Switch>
   


    <Footer/>
    </Router>
    </>
  );
}

export default App;
