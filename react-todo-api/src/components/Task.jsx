import React from 'react'

export default function Task({job:{id,task,isDone},deleteTask,doneTask ,deleting}) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
    deleteTask(id)
  }

}
    const handleOnchange = () => {
        // Logic to handle checkbox change
        doneTask(id , isDone)
    }
  return (
    <div className='border p-3 rounded-lg mb-2 last:mb-0 flex justify-between items-center'> 
    <div className="flex items-center gap-3">
        <input type="checkbox" className='size-4 ' checked={isDone} onChange={handleOnchange}/>
        <p className={ isDone ? "line-through" : ""}>{task}</p>
    </div>
     <button onClick={handleDelete} className='bg-red-100 disabled:opacity-50 border border-red-500 text-red-500 rounded-lg py-2 px-4 text-sm'>{deleting ? "Deleting..." : "Delete"}</button>
    </div>
  )
}
