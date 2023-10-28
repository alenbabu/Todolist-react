import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const onDelete=(id)=>{
    setTodos(todos.filter((to) => to.id !== id))
  }


  return (
    <div className="main-body">
      <div className="app">
        <div className="heading">
          <h1 id="main-heading">Todo List </h1>
          <h2>Note your todo Now!!</h2>

        </div>
        <div className="input">
          <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="🖊️ Add item..." />
          <i onClick={() => setTodos([...todos, { id: Date.now(), string: text, status: false }])} className="fas fa-plus"></i>
        </div>
      </div>
      <div className="task">
        <div className="sub-task">
          <h1 className="task-heading">ACTIVE</h1>
          {todos.map((obj) => {
            if(!obj.status){
              return (
                <div className="todo">
                <div className="left">
                  <input onChange={(e) => {
                    console.log(e.target.checked);
                    setTodos(todos.filter((obj2)=>{
                      if(obj2.id===obj.id){
                        obj.status=e.target.checked
                      }
                      return obj2
                    }))
                  }}value={obj.status} className="todo-list" type="checkbox" name="" id="" />
                  <p>{obj.string}</p>
                </div>
                <div className="right">
                  <i onClick={()=>onDelete(obj.id)} className="fas fa-times"></i>
                </div>
              </div> 
            )

            }
            return null
            
          })}

        </div>
        <div className="sub-task">
          <h1 className="task-heading">DONE</h1>
          {todos.map((obj) => {
            if(obj.status){
              return (
                <div className="todo">
                <div className="left">
                  <p className="done-paragraph">{obj.string}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times"></i>
                </div>
              </div> 
            )
            }
            return null
            
          })}
          
        </div>
      </div>
    </div >

  );
}

export default App;
