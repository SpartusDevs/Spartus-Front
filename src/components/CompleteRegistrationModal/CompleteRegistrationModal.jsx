import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, DatePicker, Select, Upload, Input, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { handleImageUpload } from "../../utils/imageUtils"; // Importa la función desde el archivo utils
import allCountries from "../../assets/json/countries.json";
import "./CompleteRegistrationModal.css";

const { Option } = Select;

function CompleteRegistrationModal() {
  const [modalVisible, setModalVisible] = useState(true);
  const [formData, setFormData] = useState({
    image: null,
    birthDate: null,
    country: "",
    phone: "",
    countryCode: "+54", 
  });
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(
    "https://img.freepik.com/fotos-premium/soldados-espartanos_863013-38378.jpg?w=740"
  ); // Ruta de la imagen por defecto

  const handleDateChange = (date, dateString) => {
    setFormData({ ...formData, birthDate: dateString });
  };

  const handleCountryChange = (value) => {
    const selectedCountry = allCountries.find((country) => country.name === value);
    setFormData({
      ...formData,
      country: value,
      countryCode: selectedCountry ? selectedCountry.dialCode : "",
    });
  };

  const handlePhoneChange = (e) => {
    setFormData({ ...formData, phone: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.phone) {
      message.error("Por favor ingresa un número de teléfono válido.");
      return;
    }
    console.log("Datos del formulario:", formData);
    setModalVisible(false);
    message.success("Registro completado");
  };

  const handleCancel = () => {
    setModalVisible(false);
    Modal.confirm({
      title: "¿Estás seguro?",
      content:
        "Si no ingresas la información, no podrás continuar en el Dashboard de Spartus.",
      okText: "Continuar",
      cancelText: "Completar info",
      onOk() {
        navigate("/");
      },
      onCancel() {
        setModalVisible(true);
      },
    });
  };

  return (
    <Modal
      title="Completar Registro"
      visible={modalVisible}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancelar
        </Button>,
        <Button
          key="submit"
          type="primary"
          style={{ backgroundColor: "#003366", borderColor: "#003366" }}
          onClick={handleSubmit}
        >
          Guardar
        </Button>,
      ]}
    >
      <div className="register-steps">
        {/* Cargar imagen */}
        <div className="form-group image-upload-group">
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" />
          </div>
          <Upload
            beforeUpload={() => false}
            onChange={({ file }) => handleImageUpload(file, setImagePreview, setFormData, formData)} // Usa la función importada
            maxCount={1}
            showUploadList={false}
          >
            <Button
              icon={<UploadOutlined />}
              style={{
                backgroundColor: "#003366",
                color: "#fff",
                borderColor: "#003366",
              }}
            >
              Seleccionar Imagen
            </Button>
          </Upload>
        </div>

        {/* Fecha de nacimiento */}
        <div className="form-group">
          <label style={{ color: "#003366" }}>Fecha de Nacimiento:</label>
          <DatePicker
            style={{ width: "100%" }}
            onChange={handleDateChange}
            placeholder="Seleccionar fecha"
          />
        </div>

        {/* País */}
        <div className="form-group">
          <label style={{ color: "#003366" }}>País:</label>
          <Select
            style={{ width: "100%" }}
            onChange={handleCountryChange}
            placeholder="Seleccionar país"
          >
            {allCountries.map((country) => (
              <Option key={country.code} value={country.name}>
                <img
                  src={country.flag}
                  alt={country.name}
                  style={{ width: 20, height: 15, marginRight: 10 }}
                />
                {country.name}
              </Option>
            ))}
          </Select>
        </div>

        {/* Número de teléfono */}
        <div className="form-group">
          <label style={{ color: "#003366" }}>Número de Teléfono:</label>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            {/* Selección del código de país */}
            <Select
              value={formData.countryCode}
              onChange={(value) =>
                setFormData({ ...formData, countryCode: value })
              }
              style={{ width: "30%" }}
              placeholder="Código"
            >
              {allCountries.map((country) => (
                <Option key={country.code} value={country.dialCode}>
                  <img
                    src={country.flag}
                    alt={country.name}
                    style={{
                      width: 20,
                      height: 15,
                      marginRight: 10,
                      paddingTop: "4px",
                    }}
                  />
                  {country.dialCode}
                </Option>
              ))}
            </Select>
            {/* Input para el número de teléfono */}
            <Input
              type="text"
              placeholder="Ingresa tu número de teléfono"
              value={formData.phone}
              onChange={handlePhoneChange}
              style={{ width: "80%" }}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CompleteRegistrationModal;
