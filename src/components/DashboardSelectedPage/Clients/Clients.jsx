import React, { useState } from "react";
import './Clients.css';

// Datos de clientes (harcodeados)
const initialClients = [
  { id: 1, name: "Juan Pérez", email: "juan@empresa.com", phone: "123-456-7890" },
  { id: 2, name: "Ana López", email: "ana@empresa.com", phone: "987-654-3210" },
];

function Clients() {
  const [clients, setClients] = useState(initialClients);
  const [newClient, setNewClient] = useState({ name: "", email: "", phone: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClient({
      ...newClient,
      [name]: value,
    });
  };

  const handleAddClient = (e) => {
    e.preventDefault();
    if (newClient.name && newClient.email && newClient.phone) {
      const client = { id: clients.length + 1, ...newClient };
      setClients([...clients, client]);
      setNewClient({ name: "", email: "", phone: "" }); // Limpiar formulario
    }
  };

  return (
    <div className="clients-container">
      <h1 className="clients-title">Área de Clientes</h1>

      {/* Formulario para registrar cliente */}
      <div className="client-form">
        <h2>Registrar Nuevo Cliente</h2>
        <form onSubmit={handleAddClient}>
          <input
            type="text"
            name="name"
            value={newClient.name}
            onChange={handleInputChange}
            placeholder="Nombre"
            required
          />
          <input
            type="email"
            name="email"
            value={newClient.email}
            onChange={handleInputChange}
            placeholder="Correo Electrónico"
            required
          />
          <input
            type="text"
            name="phone"
            value={newClient.phone}
            onChange={handleInputChange}
            placeholder="Teléfono"
            required
          />
          <button type="submit">Registrar Cliente</button>
        </form>
      </div>

      {/* Lista de clientes registrados */}
      <div className="clients-list">
        <h2>Lista de Clientes</h2>
        {clients.length === 0 ? (
          <p>No hay clientes registrados.</p>
        ) : (
          <ul>
            {clients.map((client) => (
              <li key={client.id}>
                <strong>{client.name}</strong> - {client.email} - {client.phone}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Clients;
