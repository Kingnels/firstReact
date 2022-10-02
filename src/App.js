import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState(
    [
      {
          id: 1,
          text: "Doctors Appointments",
          day: "Feb 5th at 2:30pm",
          reminder: true
      },
      {
          id: 2,
          text: "Meeting at school",
          day: "Feb 6th at 1:30pm",
          reminder: true
      },
      {
          id: 3,
          text: "Food shopping",
          day: "Feb 5th at 2:30pm",
          reminder: false
      }
  ]
  )
  //add the task
  const addTask = (task) =>{
    console.log(task)
  }
  // Deleting a Task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=>task.id !== id ))
  }

  //toggle reminder

  const toggleReminder = (id) => {
     setTasks(tasks.map((task) => task.id === id? 
     {...task, reminder:!task.reminder}: task))
  } 

  return (
    <div className ='container'>
      <Header />
      <AddTask onAdd = {addTask}/>
      {tasks.length > 0 ? 
      (<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle={toggleReminder}/>) : 
      ("No tasks to show")}
    </div>
  );   
}

export default App;





























// class App extends React.Component{
//   render(){
//     return <h1>Hello from a component</h1>
//   }
// }



















// const [isRed, setRed] = useState(false)
// const [count, setcount] = useState(0)

// const increment = ()=>{
//   setcount(count + 1 );
//   setRed(!isRed);
// }
// const decrement = ()=>{
//   setcount(count - 1 );
// }  
