import { useState } from "react";
import "./GitHubGestion.css";

function GitHubGestion({ repos }) {
  const [showAllRepos, setShowAllRepos] = useState(false);

  const handleShowAll = () => {
    setShowAllRepos(true);
  };

  const handleShowLess = () => {
    setShowAllRepos(false);
  };

  return (
    <div className="github-panel">
      <h1 className="github-title">Gestión de GitHub</h1>
      <div className="git-hub_flex">
      <RepoList
        repos={repos}
        showAllRepos={showAllRepos}
        handleShowAll={handleShowAll}
        handleShowLess={handleShowLess}
      />
      <GitConsole/>
      </div>
    </div>
  );
}

export default GitHubGestion;

const RepoList = ({ repos, showAllRepos, handleShowAll, handleShowLess }) => {
  return (
    <div className="repos-list">
      <h2>Repositorios:</h2>
      <div className="repos-container">
        <ul>
          {repos.slice(0, showAllRepos ? repos.length : 6).map((repo) => (
            <li key={repo.id}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>{repo.name}</strong>
              </a>
              <p>
                <strong>Última modificación:</strong>{" "}
                {new Date(repo.updated_at).toLocaleString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {!showAllRepos && repos.length > 6 && (
        <button className="view-more" onClick={handleShowAll}>
          Ver todos los repositorios
        </button>
      )}

      {showAllRepos && (
        <button className="view-more" onClick={handleShowLess}>
          Ver menos repositorios
        </button>
      )}
    </div>
  );
};

const GitConsole = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('');

  const handleCommandChange = (event) => {
    setCommand(event.target.value);
  };

  const handleCommandSubmit = (event) => {
    event.preventDefault();
    // Simula ejecutar el comando, puedes hacer una llamada a un servidor para ejecutar comandos reales
    if (command.startsWith('git')) {
      setOutput(`Ejecutando: ${command}`);
    } else {
      setOutput('Comando no reconocido. Usa comandos Git.');
    }
    setCommand('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '65vh', width:'100%',paddingTop:'20px' }}>
      <div style={{height: '100%', width:'100%', background: '#2d2d2d', color: 'white', padding: '10px', fontFamily: 'Courier, monospace', flex: 1, overflowY: 'auto' }}>
        <pre>{output}</pre>
      </div>
      <form onSubmit={handleCommandSubmit}>
        <input
          type="text"
          value={command}
          onChange={handleCommandChange}
          placeholder="Escribe tu comando Git..."
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#1e1e1e',
            color: 'white',
            border: 'none',
            fontFamily: 'Courier, monospace',
            fontSize: '16px',
          }}
        />
      </form>
    </div>
  );
};
