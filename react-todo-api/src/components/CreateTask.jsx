import React, { useState } from 'react'

import { ring2 } from 'ldrs'
ring2.register()


export default function CreateTask({addTask,sending}) {
    const [job,setJob] = useState("");
    const handlerOnchange = (event) => {
       setJob (event.target.value) 
        
    }
    const handlerOnclick = () => {
        if(job.trim) {
            const newTask = {
           
                task: job,
                isDone: false
            }
        
   addTask(newTask)
   setJob("")
        
        }
        else {
            alert("Please enter a task")
        }
    }
  return (
    <div className='flex mb-5'>
        <input type="text" placeholder='Write a task' className='border border-gray-300 rounded-md p-2  flex-grow ' value={job} onChange={handlerOnchange} disabled={sending}/>
        <button  disabled={sending} className='bg-blue-500 text-white rounded-md py-2 px-4 ml-2 disabled:opacity-50' onClick={handlerOnclick}>{sending ? <l-ring-2
  size="20"
  stroke="5"
  stroke-length="0.25"
  bg-opacity="0.1"
  speed="0.8" 
  color="black" 
></l-ring-2> : "Add"}</button>
      
    </div>
  )
}


