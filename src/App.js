import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  return (
    <div className="main-body">
      <div className="app">
        <div className="heading">
          <h1>Todo List </h1>
          <h2>Note your todo Now!!</h2>

        </div>
        <div className="input">
          <input type="text" placeholder="🖊️ Add item..." />
          <i className="fas fa-plus"></i>
        </div>
      </div>
      <div className="task">
        <div className="active-task">
          <h1>ACTIVE TASK</h1>
          <div className="todo">
            <div className="left">
              <input type="checkbox" name="" id="" />
              <p>heloooooooo</p>
            </div>
            <div className="right">
              <i className="fas fa-times"></i>
            </div>
          </div>
        </div>
        <div className="done-task">
          <h1>DONE TASK</h1>

        </div>
        <div className="deleted-task">
          <h1>DELETED TASK</h1>

        </div>
      </div>
    </div >

  );
}

export default App;
