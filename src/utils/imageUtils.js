// src/utils/imageUtils.js

import { message } from "antd";

export const handleImageUpload = (file, setImagePreview, setFormData, formData) => {
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
    setFormData({ ...formData, image: file });
    message.success("Imagen cargada exitosamente");
  } else {
    message.error("Por favor selecciona un archivo de imagen válido");
  }
};
