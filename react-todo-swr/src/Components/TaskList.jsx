import React from 'react'
import Task from './Task';
import SkeletonLoader from './SkletonLoading';

export default function TaskList({tasks,deleteTask,doneTask ,isLoading}) {
   
      
  return (
    <div>
      {
        isLoading ? <SkeletonLoader/> : <h3 className='font-bold  font-serif text-3xl mb-3'>Task List (Total{tasks.length}, Done {tasks.filter(el=> el.isDone).length}) </h3>
      }{tasks.map(el=> <Task doneTask={doneTask} key={el.id} job={el} deleteTask={deleteTask}/>)}
  
      

    </div>
  )
}
