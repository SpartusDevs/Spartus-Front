import React from 'react';
import './Team.css';
import yo from '../../../assets/developers/yo.jpg';
import otro2 from '../../../assets/developers/otro2.jpg';
import otro3 from '../../../assets/developers/otro3.jpg';


function Team() {
  const teamMembers = [
    { id: 1, name: 'Juan Pérez', role: 'Frontend Developer', photo: yo },
    { id: 2, name: 'María López', role: 'Backend Developer', photo: otro2 },
    { id: 3, name: 'Carlos García', role: 'UI/UX Designer', photo: otro2 },
    { id: 4, name: 'Ana Torres', role: 'Project Manager', photo: otro3 },
  ];
  
  return (
    <div className="team-container">
      <h2 className="team-title">Nuestro Equipo</h2>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
