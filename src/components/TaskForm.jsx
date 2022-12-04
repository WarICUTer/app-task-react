import {useContext, useState} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState("")
  const { createTask }= useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} className='col-md-4 offset-md-4'>
      <div className='mb-3'>
        <label className="form-label">Title</label>
        <input className="form-control" type="text" placeholder="Write your task" onChange={(e)=>setTitle(e.target.value)} value={title} autoFocus required/>
      </div>
      <div className="mb-3">
        <label className="form-label">Description of task</label>
        <textarea className="form-control" placeholder='Write description for your task' onChange={(e)=>setDescription(e.target.value)} cols="30" rows="3" value={description} required></textarea>
      </div>
      <div className='d-flex justify-content-center'>
        <button className="btn btn-info fw-bold">Create</button>
      </div>
    </form>
  );
}

export default TaskForm;
