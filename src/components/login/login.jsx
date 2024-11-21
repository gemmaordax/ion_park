//LIBRERIAS
import React, { useState } from "react";

//CSS
import "../login/login.css";

//IMÁGENES SVG
import showPasswordIcon from "../../img/icons/eye.svg";

//CONSTANTES
//Define los campos del formulario
const Login = () => {
  const [formData, setFormData] = useState({
    usuario: "",
    contraseña: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  //Comprueba los cambios realizados en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //Controla la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // Aquí puedes realizar la lógica para verificar los datos de inicio de sesión
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de inicio de sesión:", formData);
  };

  //CÓDIGO
  return (
    <main>
      <div className="login">
        <h2>INICIAR SESIÓN</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <fieldset>
            <legend htmlFor="usuario">Usuario</legend>
            <input
              type="text"
              id="usuario"
              name="usuario"
              value={formData.usuario}
              onChange={handleChange}
              placeholder="Escribe tu usuario..."
              required
            />
          </fieldset>

          <fieldset className="password-fieldset">
            <legend htmlFor="contraseña">Contraseña</legend>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="contraseña"
                name="contraseña"
                value={formData.contraseña}
                onChange={handleChange}
                placeholder="Escribe tu contraseña..."
                required
              />

              <button type="button" className="eye" onClick={togglePasswordVisibility} >
                <img src={showPassword ? showPasswordIcon : showPasswordIcon} alt={showPassword ? "Ocultar" : "Mostrar"} />
              </button>
            </div>
          </fieldset>

          <button type="submit">
            <h3>INICIAR SESIÓN</h3>{" "}
          </button>
          <div className="forget-pass">
            <p>
              <a href="/recuperar-contraseña">¿Olvidaste tu contraseña? </a>
            </p>
            <div className="login-divider" />
          </div>
          <button className="register-button" type="submit">
            <h3>REGISTRARSE</h3>{" "}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
