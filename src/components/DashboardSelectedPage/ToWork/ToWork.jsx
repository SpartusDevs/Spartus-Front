import React, { useState } from 'react';
import './ToWork.css';

function ToWork() {
  const [task, setTask] = useState(''); // Estado para la nueva tarea
  const [tasks, setTasks] = useState([]); // Estado para la lista de tareas

  // Función para agregar una tarea
  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask(''); // Limpiar el campo de entrada
    }
  };

  // Función para marcar o desmarcar una tarea como completada
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((t) => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  // Función para eliminar una tarea
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="to-work">
      <h1>Lista de Tareas</h1>
      <div className="task-input">
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Agrega una nueva tarea" 
        />
        <button onClick={handleAddTask}>Agregar</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleTaskCompletion(task.id)}>
              {task.text}
            </span>
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToWork;
