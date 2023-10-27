import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  return (
    <div className="main-body">
      <div className="app">
        <div className="heading">
          <h1 id="main-heading">Todo List </h1>
          <h2>Note your todo Now!!</h2>

        </div>
        <div className="input">
          <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="🖊️ Add item..." />
          <i onClick={() => setTodos([...todos, text])} className="fas fa-plus"></i>
        </div>
      </div>
      <div className="task">
        <div className="sub-task">
          <h1 className="task-heading">ACTIVE</h1>
          {todos.map((value) =>{
            return (
              <div className="todo">
                <div className="left">
                  <input className="todo-list" type="checkbox" name="" id="" />
                  <p>{value}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times"></i>
                </div>
              </div>
            )
          })}

        </div>
        <div className="sub-task">
          <h1 className="task-heading">DONE</h1>


        </div>
      </div>
    </div >

  );
}

export default App;
