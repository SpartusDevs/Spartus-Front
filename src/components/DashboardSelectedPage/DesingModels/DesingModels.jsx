import React, { useState } from 'react';
import { MermaidDiagram } from "@lightenna/react-mermaid-diagram";
import { Button, message } from 'antd';
import { SaveOutlined, DeleteOutlined, CloseOutlined } from '@ant-design/icons';  // Added CloseOutlined for the cross icon
import './DesingModels.css';

// Importar los diagramas desde el archivo JSON
import presetDiagrams from './presetDiagrams.json';

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
  };

  const handleClear = () => {
    setDiagramCode('');
    message.success('¡Área de texto borrada!');
  };

  const handleNewDiagram = (newCode) => {
    setDiagramCode(newCode);
    message.success('¡Nuevo diagrama establecido!');
  };

  const handleDeleteDiagram = (index) => {
    // Placeholder function for deleting diagram
    message.success(`¡Diagrama ${index + 1} eliminado!`);
  };

  return (
    <div className='big_container-desing'>
      <h2>Diagrama Mermaid</h2>
      <div className="design-models-container">
        <div className="diagram-container">
          <MermaidDiagram style={{ color: 'black' }}>
            {diagramCode}
          </MermaidDiagram>
        </div>

        <div className="desing-textArea-container">
          <div className="button-container">
            <Button
              icon={<SaveOutlined />}
              onClick={handleSave}
              style={{ marginRight: 10 }}
              ghost
            >
              Guardar Código
            </Button>
            <Button
              icon={<DeleteOutlined />}
              onClick={handleClear}
              danger
              style={{ marginRight: 10 }}
              ghost
            >
              Borrar Área
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

      <div className="preset-diagrams-container">
        {presetDiagrams.map((preset, index) => (
          <div key={index} className='preset-diagrams-box' onClick={() => handleNewDiagram(preset.code)}>
            <div className="delete-icon-container">
              <Button
                type="link"
                icon={<CloseOutlined />}
                onClick={(e) => {
                  e.stopPropagation();  // Prevent diagram click event from firing
                  handleDeleteDiagram(index);  // Delete diagram
                }}
                className="delete-icon"
              />
            </div>
            <MermaidDiagram style={{ color: 'black' }} className="preset-item_code">
              {preset.code}
            </MermaidDiagram>
            <h4>{preset.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesingModels;
