import { $api } from "./api";


export const sendMessageToChatGPT = async (message) => {
  try {
    const response = await $api.post("/chat", { message });
    return response.data;
  } catch (error) {
    console.error("Error al comunicarse con el servidor:", error);
    throw new Error("No se pudo conectar al servidor.");
  }
};
