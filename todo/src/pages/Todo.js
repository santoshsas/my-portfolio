import { useReducer, useEffect } from "react";
import service from "../services/TaskService";
import { getCompletedTasks, getUncompletedTasks } from "../getters/getTasks";
import { Task } from "../components/Task"
import { Button } from "../components/Button"
import { TaskReducer } from "../reducers/TaskReducer";
import './Todo.css';


export function Todo () {
  const [state, dispatch] = useReducer(TaskReducer, {tasks: []})
  // Sumulating loading from server
  useEffect(() => {
    service.getTasksData().then(tasks => dispatch({type: 'loadTasks', payload: tasks}))
    }, []);
  
  const clickHandler = ({id, completed})  => {
    dispatch({type: 'updateTask', payload: {id, completed}})
  }

  const handleCreateTask = (task) => {

  }

  return (
    <div className="todo-page">
       <div className="uncompleted"> TO DO
        <ul>
                {
                getUncompletedTasks(state.tasks).map(task => (
                    <Task key={task.id} {...task} handleClick={clickHandler}></Task>
                ))
                }
        </ul>
        </div>
        <div className="completed"> Completed Tasks
            <ul>
                {
                getCompletedTasks(state.tasks).map(task => (
                    <Task key={task.id} {...task} handleClick={clickHandler}></Task>
                ))}
            </ul>
        </div>
        <div className="actions">
          <Button onClick={handleCreateTask}>Create</Button>
        </div>
    </div>
  );
};
