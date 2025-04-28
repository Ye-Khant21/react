import React from 'react'
import Task from './Task';

export default function TaskList({tasks,deleteTask,doneTask ,deleting}) {
   
      
  return (
    <div>
      <h3 className='font-bold  font-serif text-3xl mb-3'>Task List (Total{tasks.length}, Done {tasks.filter(el=> el.isDone).length}) </h3>
      {tasks.map(el=> <Task deleting={deleting[el.id] || false} // Pass task-specific deleting state
        doneTask={doneTask} key={el.id} job={el} deleteTask={deleteTask}/>)}


    </div>
  )
}
