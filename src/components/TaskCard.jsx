import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard({task}) {

  const {deleteTask} = useContext(TaskContext)

  return (
    <div className="card w-auto shadow mb-5 bg-body rounded">
      <div className="card-header bg-info">
        <h2>{task.title}</h2>
      </div>
      <div className="card-body">        
        <p className='card-text'>{task.description}</p>
        <button className='btn btn-danger' onClick={() => { deleteTask(task.id) }}>Delete</button>
      </div>
    </div>
  )
}

export default TaskCard;