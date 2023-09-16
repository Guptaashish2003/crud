import "./App.css"
import { useState } from "react"
import TaskForm from "./components/TaskForm"
import TodoDetail from "./components/todoDetail"
import {Route,Routes} from "react-router-dom"
let Dummy_Data=[
  {
    date: "2030-01-01",
    id: new Date(),
    task: "SUCCESS",
    time: "05:00",
    key:new Date()
  }
]
const App=()=>{
  const [ todoDetail, setTodoDetail ]= useState(Dummy_Data)

 const addTaskDataHandler = (tasksdata) => {
   const newTask = {
     ...tasksdata,
     id: new Date().getTime(),
     key : new Date()// Generate a unique id using timestamp
   };
   const updatedTodoDetail = [newTask, ...todoDetail]; 
   setTodoDetail(updatedTodoDetail);
 };
  const deleteTaskDataHandler=(deleteTasksData)=>{
    setTodoDetail(deleteTasksData);
  }

  
    return(
      <div>
      
        <Routes>
          <Route  default path="*"  index element={<TodoDetail data={todoDetail} onAddTasks={addTaskDataHandler}  onDelete={deleteTaskDataHandler}/>}/>
          <Route path="TaskForm" element={<TaskForm onAddTodo={addTaskDataHandler} />}/>
        </Routes>
        
      </div>
    )
}
export default App

