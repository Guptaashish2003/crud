import React from 'react'
import Todo from './Todo'
import NavBar from "./NavBar"
import "./TodoDetail.css"
function TodoDetail(props) {
  
  return (
    <div className='td-container'><div><NavBar /></div>
      <div className="card">
        {
          props.data.map(tasks => (
            <Todo
            date={tasks.date}
            time={tasks.time}
            task={tasks.task}
            id={tasks.id}
            key={tasks.key}
            dataTask={props.data}
            deleteTodo={props.onDelete}/>         
            ) 

          )
        }
      </div>
    </div>
  )
}

export default TodoDetail;