import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/tasks';
// Creacion del contexto es una componente que esta en todo y se pone comopadre, espera elementos hijos
export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([])

  function createTask(task){
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }

  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  useEffect(()=>{
    setTasks(data)
  }, [])

  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContext