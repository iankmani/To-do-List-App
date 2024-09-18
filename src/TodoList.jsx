import React, {useState} from 'react'
import "./TodoList.css"

const TodoList = () => {
    const [tasks, setTasks] = useState(["Touch Murima😂", "Go to Adani Airport✈️","Buy walkerTown Tickets😎"])
    const [newTask, setNewTask] = useState("")

    const handleInputChange = (event) =>{
        setNewTask(event.target.value)

    } 
    const handleAddTask = () => {
        if (newTask.trim() !== "") {
        setTasks(t =>[...t, newTask])
        setNewTask("")

    }
}
const handleDeleteTask = (index) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this task?'
    );
    if (confirmDelete) {
      const deletedTask = tasks.filter((_, i) => i !== index);
      setTasks(deletedTask);
    }
};

    const moveTaskUp = (index) => {
        if (index > 0) {
            const upwardtasks = [...tasks];  // Copy the tasks array
            // Swap the task at the current index with the one above it
            [upwardtasks[index], upwardtasks[index - 1]] = 
            [upwardtasks[index - 1], upwardtasks[index]];
            setTasks(upwardtasks);  // Update the state with the modified array
        }
    };
    
    const moveTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const downwardtasks = [...tasks];  // Copy the tasks array
            // Swap the task at the current index with the one below it
            [downwardtasks[index], downwardtasks[index + 1]] = 
            [downwardtasks[index + 1], downwardtasks[index]];
            setTasks(downwardtasks);  // Update the state with the modified array
        }
    };
    

  return (
    <div className='TodoList-app'>
        <div className='TodoList-input'>
        <h1><span className='g'>G</span>-PANGE</h1>
        <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter task"/>
        <button className='add-button' onClick={handleAddTask}>Add Task</button>
        </div>
        <ol>
            {tasks.map((task, index) => (
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button' onClick={() => handleDeleteTask(index)}>Delete</button>
                    <button className='move-button' onClick={() => moveTaskUp(index)}>👆</button>
                    <button className='move-button' onClick={() => moveTaskDown(index)}>👇</button>
                </li>
            ))}
        </ol>
    </div>
  )
}

export default TodoList