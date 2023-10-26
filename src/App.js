import { useState } from "react";
import "./App.css";

function App() {
  const [todos,setTodos] = useState([])
  const [text,setText] = useState('')

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoops, it's Wednesday ☕ </h2>
      </div>
      <div className="input">
        <input value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=> setTodos([...todos,text])} className="fas fa-plus"></i>
      </div>
      {todos.map((value)=>{
        return(
          <div className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>{value}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
        )

      })}
      
    </div>
  );
}

export default App;
