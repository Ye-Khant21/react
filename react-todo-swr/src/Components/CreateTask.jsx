import React, { useState } from 'react'

export default function CreateTask({addTask}) {
    const [job,setJob] = useState("");
    const handlerOnchange = (event) => {
       setJob (event.target.value) 
        
    }
    const handlerOnclick = () => {
        const newTask = {
            // id: Date.now(),
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
