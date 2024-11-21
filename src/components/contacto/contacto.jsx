//LIBRERIAS
import React, { useState } from "react";

//CSS
import "../contacto/contacto.css";

//IMÁGENES
import ImgContacto from "../../img/assets/empresa.png";

//CONSTANTES
//Define los campos del formulario
const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [emailError, setEmailError] = useState("");
  //Comprueba los cambios realizados en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    //Comprueba si se ha introducido un correo electronico válido
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(value);

      setEmailError(
        isValidEmail ? "" : "Por favor, introduce un correo electrónico válido."
      );
    }
  };

  // Verifica que no haya errores de validación antes de enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError) {
      console.log("Datos del formulario:", formData);
    } else {
      console.log("Formulario no válido. Por favor, corrige los errores.");
    }
  };

  //CÓDIGO
  return (
    <main>
      <div className="contacto">
        <div className="formulario-contacto">
          <h2>CONTACTA CON NOSOTROS</h2>
          <form onSubmit={handleSubmit} className="form-contacto">
            <fieldset>
              <legend htmlFor="nombre">Nombre</legend>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Escribe tu nombre..."
                required
              />
            </fieldset>

            <fieldset>
              <legend htmlFor="email">Correo Electrónico</legend>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Escribe tu correo electrónico..."
                required
              />
            </fieldset>

            <fieldset>
              <legend htmlFor="asunto">Asunto</legend>
              <input
                type="text"
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                placeholder="Escribe el asunto..."
                required
              />
            </fieldset>

            <fieldset>
              <legend htmlFor="mensaje">Mensaje</legend>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="6"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Escribe el mensaje..."
                required
              ></textarea>
            </fieldset>

            <button type="submit">
              <h3>ENVIAR</h3>{" "}
            </button>
          </form>
        </div>

        <div className="imagen-contacto">
          <img src={ImgContacto} alt="contacto-img" />
        </div>
      </div>
    </main>
  );
};

export default Contacto;
