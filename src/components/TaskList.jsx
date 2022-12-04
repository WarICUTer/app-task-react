import TaskCard from "./TaskCard";
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskList() {

  const {tasks, deleteTask} = useContext(TaskContext)

  if (tasks.length === 0){
    return <h2 className="h1 fw-bold text-center mt-4">No hay tareas aun</h2>
  }

  return (
    <div className="d-flex flex-wrap justify-content-evenly mt-4">
      {
        tasks.map((task) => (
          <TaskCard key={task.id} task={task}/>
        ))
      }
    </div>
  );
}

export default TaskList;