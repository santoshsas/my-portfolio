import { useState, useEffect } from "react";
import service from "../services/TaskService";
import { getCompletedTasks, getUncompletedTasks } from "../getters/getTasks";
import { Task } from "../components/Task"
import './Todo.css';


export const Todo = () => {
  const [tasks, setTasks] = useState([]);
  // Sumulating loading from server
  useEffect(() => {
    service.getTasksData().then(tasks => setTasks(tasks))
    }, []);

  const clickHandler = ({id, completed})  => {
    const updatedTasks = tasks.map(task => task.id === id ? { ...task, completed:completed } :  task)
    setTasks(updatedTasks)
  }

  return (
    <div className="todo-page">
       <div className="uncompleted"> TO DO
        <ul>
                {
                getUncompletedTasks(tasks).map(task => (
                    <Task key={task.id} {...task} handleClick={clickHandler}></Task>
                ))
                }
        </ul>
        </div>
        <div className="completed"> Completed Tasks
            <ul>
                {
                getCompletedTasks(tasks).map(task => (
                    <Task key={task.id} {...task} handleClick={clickHandler}></Task>
                ))}
            </ul>
        </div>
    </div>
  );
};
