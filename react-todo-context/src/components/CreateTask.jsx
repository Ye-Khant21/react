import React, { useContext, useState } from 'react'
import TaskContext from '../context/TaskContext';

export default function CreateTask() {
    const [job,setJob] = useState("");
    const {addTask} = useContext(TaskContext)
    const handlerOnchange = (event) => {
       setJob (event.target.value) 
        
    }
    const handlerOnclick = () => {
        const newTask = {
            id: Date.now(),
            task: job,
            isDone: false
        }
   addTask(newTask)
   setJob("")
        

    }
  return (
    <div className='flex mb-5'>
        <input type="text" placeholder='Write a task' className='border border-gray-300 rounded-md p-2  flex-grow ' value={job} onChange={handlerOnchange}/>
        <button className='bg-blue-500 text-white rounded-md py-2 px-4 ml-2' onClick={handlerOnclick}>Add text</button>
      
    </div>
  )
}
