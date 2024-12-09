import { $api } from "./api.js";

export const updateMyProfile = async (token, data) => {
  try {
    const response = await $api.put('/users/edit_profile', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return response;
  } catch (error) {
    throw new Error('Error al actualizar el perfil: ' + error.message);
  }
};
