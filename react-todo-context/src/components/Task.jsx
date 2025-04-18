import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'

export default function Task({job:{id,task,isDone}}) {
  const {deleteTask,doneTask} = useContext( TaskContext)
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
    deleteTask(id)
  }

}
    const handleOnchange = () => {
        // Logic to handle checkbox change
        doneTask(id)
    }
  return (
    <div className='border p-3 rounded-lg mb-2 last:mb-0 flex justify-between items-center'> 
    <div className="flex items-center gap-3">
        <input type="checkbox" className='size-4 ' checked={isDone} onChange={handleOnchange}/>
        <p className={ isDone ? "line-through" : ""}>{task}</p>
    </div>
     <button onClick={handleDelete} className='bg-red-100  border border-red-500 text-red-500 rounded-lg py-2 px-4 text-sm'>Delete</button>
    </div>
  )
}
