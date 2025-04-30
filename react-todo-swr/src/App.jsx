import React, { useState } from "react";
import Heading from "./Components/Heading";
import CreateTask from "./Components/CreateTask";
import useSWR, { useSWRConfig } from "swr";
import Task from "./Components/Task";
import SkeletonLoader from "./Components/SkletonLoading";
import axios from "axios";
// import axios from "axios";

export default function App() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  // const [tasks,setTask]=  useState([
  //   { id: 1, task: "Complete JavaScript assignment", isDone: false },
  //   { id: 2, task: "Prepare for meeting with client", isDone: false },
  //   { id: 3, task: "Update project documentation", isDone: true },
  //   { id: 4, task: "Review code for new feature", isDone: false },
  //   { id: 5, task: "Plan team-building activity", isDone: true },
  //])
  const { data, error, isLoading } = useSWR(
    // "http://localhost:5000/tasks",
    `${import.meta.env.VITE_BASE_URL}/tasks`,
    fetcher
  );  const { mutate } = useSWRConfig()
 
  
  // const addTask = async(newTask) => {
  //   //api request server mr changes phit mr 

  //   const res = await fetch("http://localhost:3000/tasks", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newTask),
  //   });
  //   // const data = await res.json();

  //   //revalidate the data
  //   mutate("http://localhost:3000/tasks")

    
  // }

  const todoApi = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}/tasks`,

    headers: {
      "Content-Type": "application/json",
    },
  })

  const addTask = async (newTask ) => {
    // await axios.post("http://localhost:3000/tasks", newTask , {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).
    await todoApi.post("/", newTask)
    mutate(`${import.meta.env.VITE_BASE_URL}/tasks`);
    
    
  }
  const deleteTask = async(id) => {
    // const res = await fetch(`http://localhost:3000/tasks/${id}`, {
    //   method: "DELETE",
    // });

    await todoApi.delete(`/${id}`)
    mutate(`${import.meta.env.VITE_BASE_URL}/tasks`);

    // setTask(tasks.filter((task)=> task.id !== id))
  }

  const doneTask = async(id , currentState) => {

    // // setTask(tasks.map((el)=> (el.id ===id? {...el, isDone: !el.isDone} : el)))
    // const res = await fetch(`http://localhost:3000/tasks/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({isDone: !currentState }),
    // });
    await todoApi.patch(`/${id}`, {isDone: !currentState })
    mutate(`${import.meta.env.VITE_BASE_URL}/tasks`);

  }
  return (
    <div className=" p-10">
      <Heading />
      <CreateTask addTask={addTask} />

      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div>
          <h3 className=" font-bold font-serif text-xl mb-3">
            Task List (Total {data.length}, Done{" "}
            {data.filter((el) => el.isDone).length})
          </h3>
          {data.map((el) => (
            <Task
              doneTask={doneTask}
              deleteTask={deleteTask}
              key={el.id}
              job={el}
            />
          ))}
        </div>
      )}
    </div>
  );
};
