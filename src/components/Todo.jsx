import React,{useState , useEffect} from 'react'
import "./Todo.css"
import delteButton from '../assets/deleteButton.png';
import editB from '../assets/edit.png';
function Todo(props) {
  const [editHandler,setEditHandler]= useState(false);
  const [taskName ,setTaskName]=useState("");
  const [afterEditTask, setAfterEditTask]=useState('');
  useEffect(() => {setTaskName(props.task);},[props.task]);



  const editTaskHandler=(event) => {
    setEditHandler(prevState => !prevState);

  }
  const deleteTaskHandler=() => {
    const updatedTasks = props.dataTask.filter(task => task.id !== props.id);
 


    props.deleteTodo(updatedTasks)

  }
  const changeTaskHandler=() => {
    if( afterEditTask!==""){setTaskName(afterEditTask);
    }
    
    setEditHandler(false);
    setAfterEditTask("")
    // console.log(editHandler,"taskname ="+ taskName,"afterEditTask="+afterEditTask)

  }
  const changeTypedTask=(event)=>{
    setAfterEditTask(event.target.value)

  }
    const date= props.date;
    const time = props.time;
  return (
     
    <div className='todo'>
        <div className='date'>
            <div>{date}</div>
        </div>
        <div className='time'>
            <div>{time}</div>
        </div>

        <div className='work_detail'>
            <h2>{taskName}</h2>
        </div>
        <div className='image'>
            <img className="image-effect" src={editB} alt="#" onClick={editTaskHandler} />
            <img  className='image-effect' src={delteButton} alt="#" onClick={deleteTaskHandler} />
        </div>
          {
            editHandler && (
              < div className='task-editor'>
                <input className="input-task" type="text" placeholder='type your task!!!' value={afterEditTask} onChange={changeTypedTask}  />
                <button onClick={changeTaskHandler}>Done</button>
              </div>
            )
          }
    </div>
  )
}

export default Todo