import React, { useEffect, useState } from 'react'
import Heading from './components/Heading'
import CreateTask from './components/CreateTask'
import TaskList from './components/TaskList'
import SkeletonLoader from './components/SkeletonLoader'

export default function App() {
  const [tasks,setTask] = useState([])

  const [taskLoading, setTaskLoading] = useState(true);
  const [sending,setSending] = useState(false);
  const [deleting,setDeleting] = useState(false);
 
  const addTask =  async (newTask) => {
    setSending(true)
    
   const res = await fetch("http://localhost:3000/tasks", {
    method : "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body : JSON.stringify(newTask) // py chin tae data
   })
   const data  = await res.json() // response data
    // setTask([...tasks, data]) // add new task to the list
    fetchTask(); //revalidate the task list
    setSending(false);
  }
  const deleteTask = async(id) => {
    setDeleting(true)
    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })

    setTask(tasks.filter((task)=> task.id !== id))
    setDeleting(false)
    
  }

  const doneTask = async(id,currentState) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({isDone: !currentState})
    })
    const data = await res.json()

    // setTask(tasks.map((el)=> (el.id ===id? data : el)))
    fetchTask(); //revalidate the task list
  }

const  fetchTask = async () => {
  const res = await fetch("http://localhost:3000/tasks").then((res) => res.json())
  setTask(res);
  setTaskLoading(false);
}

  useEffect(() => {
    fetchTask()
    
  },[])
  return (
    <div className='p-10'>
   <Heading/>
    <CreateTask sending={sending} addTask={addTask} />
    <TaskList doneTask={doneTask} tasks={tasks} deleteTask={deleteTask} deleting={deleting}/>

  {taskLoading && <SkeletonLoader />}



    </div>
  )
}
