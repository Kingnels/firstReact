import React from 'react'
import {useState} from "react" 

function AddTask({onAdd}) {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit= (e) =>{
        e.preventDefault()

        if (!text){
            alert('please add a task')
            return
        }
       onAdd({text, day, reminder})
    //    onAdd = {this.onAdd()}

        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit = {onSubmit}>
        <div className="form-control">
            <label htmlFor="">Task</label>
            <input type="text" placeholder='Add Task' 
            value = {text}
            onChange = {(e) => setText(e.target.value)}
            />
        </div>

        <div className="form-control">
            <label htmlFor="">Day & Time</label>
            <input type="text" placeholder='Add Day and time' 
             value = {day}
             onChange = {(e) => setDay(e.target.value)}
            />
        </div>

        <div className="form-control form-control-check">
            <label htmlFor="">Set Reminder</label>
            <input type="Checkbox" 
             checked ={reminder}
             value = {reminder}
             onChange = {(e) => setReminder(e.currentTarget.checked)}
            />
        </div>

        <input type="submit" value='Save Task' className='btn btn-block'/>
        
    </form>
  )
}

export default AddTask
