import React, { useState, useEffect } from 'react';
import {MermaidDiagram} from "@lightenna/react-mermaid-diagram";
import { Button, message } from 'antd';
import { SaveOutlined, DeleteOutlined, FormOutlined } from '@ant-design/icons';
import './DesingModels.css';

const DesingModels = () => {
  const [diagramCode, setDiagramCode] = useState(`
    graph TD;
    A[Inicio] --> B[Usuario ingresa datos de registro];
    B --> C{¿Datos válidos?};
    C -->|Sí| D[Registrar usuario en base de datos];
    C -->|No| E[Mostrar mensaje de error];
    D --> F[Usuario registrado exitosamente];
    E --> B;
    F --> G[Enviar correo de confirmación];
    G --> H[Fin];
  `);



  const handleCodeChange = (e) => {
    setDiagramCode(e.target.value);
  };

  const handleSave = () => {
    message.success('¡Código del diagrama guardado!');
    // Aquí puedes agregar lógica para guardar el código (localStorage, servidor, etc.)
  };

  const handleClear = () => {
    setDiagramCode('');
    message.success('¡Área de texto borrada!');
  };

  const handleNewDiagram = () => {
    setDiagramCode(`
    graph TD;
    A[Inicio] --> B[Usuario ingresa datos de registro2];
    B --> C{¿Datos válidos?};
    C -->|Sí| D[Registrar usuario en base de datos];
    C -->|No| E[Mostrar mensaje de error];
    D --> F[Usuario registrado exitosamente];
    E --> B;
    F --> G[Enviar correo de confirmación];
    G --> H[Fin];
  `);
    message.success('¡Nuevo diagrama establecido!');
  };

  return (
    <>
      <h2>Diagrama Mermaid</h2>
      <div className="design-models-container">
        <div className="diagram-container">
        <MermaidDiagram>
            {diagramCode}
            </MermaidDiagram>
        </div>

        <div className="desing-textArea-container">
          <div className="button-container">
            <Button
              icon={<SaveOutlined />}
              onClick={handleSave}
              style={{ marginRight: 10 }}
            >
              Guardar Código
            </Button>
            <Button
              icon={<DeleteOutlined />}
              onClick={handleClear}
              danger
              style={{ marginRight: 10 }}
            >
              Borrar Área
            </Button>
            <Button
              icon={<FormOutlined />}
              onClick={handleNewDiagram}
              style={{ marginRight: 10 }}
            >
              Nuevo Diagrama
            </Button>
          </div>

          <textarea
            className="diagram-code-input"
            value={diagramCode}
            onChange={handleCodeChange}
            rows="10"
            cols="50"
          />
        </div>
      </div>
    </>
  );
};

export default DesingModels;
