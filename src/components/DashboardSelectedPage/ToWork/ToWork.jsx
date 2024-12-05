import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { PlusOutlined } from "@ant-design/icons";
import "./ToWork.css";

function ToWork() {
  const [columns, setColumns] = useState({
    todo: {
      name: "To Do",
      items: [
        { id: "1", content: "Tarea 1" },
        { id: "2", content: "Tarea 2" },
      ],
    },
    inProgress: {
      name: "In Progress",
      items: [{ id: "3", content: "Tarea 3" }],
    },
    done: {
      name: "Done",
      items: [{ id: "4", content: "Tarea 4" }],
    },
  });

  const [projects, setProjects] = useState([
    { id: "1", name: "Proyecto A" },
    { id: "2", name: "Proyecto B" },
    { id: "3", name: "Proyecto C" },
  ]);

  const [selectedProject, setSelectedProject] = useState(null);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Si no se coloca en una ubicación válida, no hacer nada
    if (!destination) return;

    // Si se coloca en el mismo lugar, no hacer nada
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];

    // Remover el ítem de la columna de origen
    const [removed] = sourceItems.splice(source.index, 1);

    // Agregar el ítem a la columna de destino
    destItems.splice(destination.index, 0, removed);

    setColumns({
      ...columns,
      [source.droppableId]: { ...sourceColumn, items: sourceItems },
      [destination.droppableId]: { ...destColumn, items: destItems },
    });
  };

  const addProject = () => {
    const newProject = {
      id: String(projects.length + 1),
      name: `Proyecto ${String.fromCharCode(65 + projects.length)}`, // Simple naming
    };
    setProjects([...projects, newProject]);
  };
  const addTaskToColumn = (columnId) => {
    const newTask = {
      id: String(Math.random()), // ID único
      content: `Nueva Tarea ${Math.floor(Math.random() * 100) + 1}`, // Nombre de tarea simple
    };
  
    setColumns((prevColumns) => ({
      ...prevColumns,
      [columnId]: {
        ...prevColumns[columnId],
        items: [...prevColumns[columnId].items, newTask],
      },
    }));
  };
  
  return (
<div className="to-work">
  <h1 className="to-work_title">Tablero de Trabajo</h1>
  <div className="board">
    <DragDropContext onDragEnd={onDragEnd}>
      {Object.entries(columns).map(([columnId, column]) => (
        <div key={columnId} className="column">
          <div className="column-header">
            <h2>{column.name}</h2>
            {/* Icono para añadir tarea */}
            <span className="add-task-icon" onClick={() => addTaskToColumn(columnId)}>
              <PlusOutlined />
            </span>
          </div>
          <Droppable droppableId={columnId}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="droppable"
              >
                {column.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="draggable"
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      ))}
    </DragDropContext>
    <div className="project-panel">
      <h3>Proyectos</h3>
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={selectedProject?.id === project.id ? 'selected' : ''}
          >
            {project.name}
          </li>
        ))}
      </ul>
      {selectedProject && (
        <div className="project-details">
          <h4>Proyecto Seleccionado:</h4>
          <p>{selectedProject.name}</p>
        </div>
      )}
    </div>
  </div>
</div>

  );
}

export default ToWork;
