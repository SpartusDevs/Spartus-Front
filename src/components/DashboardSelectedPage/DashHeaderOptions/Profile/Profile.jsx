import React, { useState } from 'react';
import { useAuth } from '../../../../contexts/AuthContext';
import { updateMyProfile } from '../../../../services/User';
import { notification } from 'antd';  // Importar notification de antd
import './Profile.css';

function Profile() {
  const { user, token } = useAuth(); // Obtener el token del contexto
  const [userData, setUserData] = useState({
    firstName: user?.firstName, 
    lastName: user?.lastName,
    email: user?.email,
    profileImg: user?.profileImg || 'https://via.placeholder.com/150', // Inicialización con el valor de user.profileImg
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
      
      // Verificar que la respuesta tenga status 200
      if (response.status === 200) {
        // Mostrar mensaje de éxito con notification de Ant Design
        notification.success({
          message: 'Perfil actualizado con éxito',
          description: 'Tus datos se han actualizado correctamente.',
        });
      } else {
        // Mostrar mensaje de error si no es 200
        notification.error({
          message: 'Error al actualizar el perfil',
          description: 'Hubo un problema al actualizar tus datos. Inténtalo nuevamente.',
        });
      }
      
      console.log('Perfil actualizado:', response);
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);

      // Mostrar mensaje de error si hay un fallo en la solicitud
      notification.error({
        message: 'Error al actualizar el perfil',
        description: 'Hubo un error al intentar actualizar tus datos. Intenta nuevamente más tarde.',
      });
    }
  };

  return (
    <div className="profile-container">
      <h2>Editar Perfil</h2>
      <div className="profile-info">
        <img
          className="profile-picture"
          src={userData.profileImg} // Mostrar la imagen de perfil actualizada
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
