import {  useState } from "react";
import {  GithubOutlined } from "@ant-design/icons";
import { sendMessageToChatGPT } from "../../../services/chatGtpApi";
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
      <h1 className="github-title">Gestión de GitHub <GithubOutlined/></h1>
      <div className="git-hub_flex">
        <RepoList
          repos={repos}
          showAllRepos={showAllRepos}
          handleShowAll={handleShowAll}
          handleShowLess={handleShowLess}
        />
        <ChatGTPConsole />
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

const ChatGTPConsole = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleInputSubmit = async (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    // Mostrar el mensaje del usuario en el chat
    setOutput((prev) => [...prev, { sender: "user", content: input }]);

    try {
      // Enviar mensaje al servicio de ChatGPT
      const response = await sendMessageToChatGPT(input);
      setOutput((prev) => [...prev, { sender: "gpt", content: response.content }]);
    } catch (error) {
      setOutput((prev) => [
        ...prev,
        { sender: "error", content: "Hubo un problema al conectar con el servidor." },
      ]);
    }

    setInput(""); // Limpiar el input
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "65vh", width: "100%", paddingTop: "20px" }}>
      <div
        style={{
          height: "100%",
          width: "100%",
          background: "#2d2d2d",
          color: "white",
          padding: "10px",
          fontFamily: "Courier, monospace",
          flex: 1,
          overflowY: "auto",
        }}
      >
        {output.map((msg, index) => (
          <pre
            key={index}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              color: msg.sender === "error" ? "red" : "white",
            }}
          >
            {msg.sender === "user" ? `> ${msg.content}` : msg.content}
          </pre>
        ))}
      </div>
      <form onSubmit={handleInputSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Escribe tu mensaje..."
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#1e1e1e",
            color: "white",
            border: "none",
            fontFamily: "Courier, monospace",
            fontSize: "16px",
          }}
        />
      </form>
    </div>
  );
};
