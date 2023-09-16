import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import "./TaskForm.css"
function TaskForm(props) {
  const navigate = useNavigate()

  const [enterTask, setenterTask] = useState('');
  const [enterDate, setenterDate] = useState('');
  const [enterTime, setenterTime] = useState('');
  const taskchangeHandler = (event) => { setenterTask(event.target.value) };
  const datechangeHandler = (event) => { setenterDate(event.target.value) };
  const timechangeHandler = (event) => { setenterTime(event.target.value) };
  const handleSubmit = (event) => {
    event.preventDefault();
    const TaskData = {
      task: enterTask,
      date: enterDate,
      time: enterTime
    };
    props.onAddTodo(TaskData);
    navigate("/")
    setenterTask(' ');
    setenterDate(' ');
    setenterTime(' ');
  }
  const submitHandler=()=>{
    if(enterTask !=="" && enterDate!=="" && enterTime !==''){}
    
  }
  return (
    <div className='Task-form' >
      <form className='container' onSubmit={handleSubmit}>
        <div className='minor-container'>YOUR TASK :- 
          <input type='text' placeholder="WRITE YOUR TASK" className=" text-area"  value={enterTask}onChange={taskchangeHandler} ></input>

        </div>
        <div className=' small-card'>
          <div className='minor-container'>SELECT DATE :- 
            <input type="date" className='date-selection' value={enterDate} onChange={datechangeHandler} />
          </div>
          <div className='minor-container'> WRITE TIME :- 
            <input type="time" className='time-selection' placeholder='select time' value={enterTime} onChange={timechangeHandler} />
          </div>
        </div >
        <button  type='submit' onClick={submitHandler}> SUBMIT</button>
      </form>
    </div>
  )

}

export default TaskForm


