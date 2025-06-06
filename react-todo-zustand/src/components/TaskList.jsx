import React, { useContext } from 'react'
import Task from './Task';
import TaskContext from '../context/TaskContext';
import useTaskStore from '../../store/useTaskStore';

export default function TaskList() {
   const {tasks} = useTaskStore()
      
  return (
    <div>
      <h3 className='font-bold  font-serif text-3xl mb-3'>Task List (Total{tasks.length}, Done {tasks.filter(el=> el.isDone).length}) </h3>
      {tasks.map(el=> <Task  key={el.id} job={el}/>)}


    </div>
  )
}

