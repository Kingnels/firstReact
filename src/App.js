import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'

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

  return (
    <div className ='container'>
      <Header />
      <Tasks tasks = {tasks} />
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
