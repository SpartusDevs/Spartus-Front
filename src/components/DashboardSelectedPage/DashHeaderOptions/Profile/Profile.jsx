import React, { useState } from 'react';
import { useAuth } from '../../../../contexts/AuthContext';
import { updateMyProfile } from '../../../../services/User';
import { notification } from 'antd'; 
import { UserOutlined } from "@ant-design/icons";
import './Profile.css';

function Profile() {
  const { user, token } = useAuth();
  const [userData, setUserData] = useState({
    firstName: user?.firstName, 
    lastName: user?.lastName,
    email: user?.email,
    profileImg: user?.profileImg || 'https://via.placeholder.com/150', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateMyProfile(token, userData);
      
      if (response.status === 200) {
        notification.success({
          message: 'Perfil actualizado con éxito',
          description: 'Tus datos se han actualizado correctamente.',
        });
      } else {
        notification.error({
          message: 'Error al actualizar el perfil',
          description: 'Hubo un problema al actualizar tus datos. Inténtalo nuevamente.',
        });
      }
      
      console.log('Perfil actualizado:', response);
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);

      notification.error({
        message: 'Error al actualizar el perfil',
        description: 'Hubo un error al intentar actualizar tus datos. Intenta nuevamente más tarde.',
      });
    }
  };

  return (
    <div className="profile-container">
      <div className='profile-titles'>
      <h1>Profile <UserOutlined/></h1>
      <h2>Editar Perfil</h2></div>
      <div className="profile-info">
        <img
          className="profile-picture"
          src={userData.profileImg} 
          alt="Imagen de perfil"
        />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Nombre:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Apellido:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="profileImg">Imagen de Perfil (URL):</label>
            <input
              type="text"
              id="profileImg"
              name="profileImg"
              value={userData.profileImg}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="save-button">
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
