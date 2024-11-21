//LIBRERIAS
import React, { useState } from "react";

//CSS
import "./payment.css";

//IMAGENES SVG
import car from "../../img/icons/car.svg";
import carSel from "../../img/icons/car_sel.svg";
import bike from "../../img/icons/bike.svg";
import bikeSel from "../../img/icons/bike_sel.svg";
import van from "../../img/icons/van.svg";
import vanSel from "../../img/icons/van_sel.svg";
import paypal from "../../img/icons/paypal.svg";
import visa from "../../img/icons/visa.svg";
import mastercard from "../../img/icons/mastercard.svg";
import empty from "../../img/icons/empty.svg";
import date from "../../img/icons/date.svg";
import clock from "../../img/icons/clock.svg";

//CONSTANTES

//Define los campos del formulario
const Payment = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    prefijo: "+34",
    telefono: "",
    email: "",
    vehiculo: "opcion1",
    matricula: "",
    marca: "",
    modelo: "",
    pago: "",
    tarjeta: "",
    caduc: "",
    cvc: "",
    terminos: false,
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

    // Concatenar prefijo y teléfono
    const telefonoCompleto = formData.prefijo + formData.telefono;

    // Crear un nuevo objeto con los datos actualizados
    const datosActualizados = {
      ...formData,
      telefono: telefonoCompleto,
    };
    if (!emailError) {
      console.log("Datos del formulario:", datosActualizados);
    } else {
      console.log("Formulario no válido. Por favor, corrige los errores.");
    }
  };

  //Selecciona el vehiculo presionado
  const [selectedOption1, setSelectedOption1] = useState("opcion1");
  //Selecciona el método de pago presionado
  const [selectedOption2, setSelectedOption2] = useState(null);

  //Seleccion del vehiculo
  const handleOption1Click = (option) => {
    setSelectedOption1((prevOption) => (prevOption === option ? null : option));

    setFormData({
      ...formData,
      vehiculo: option,
    });
  };
  //Seleccion del pago
  const handleOption2Click = (option) => {
    setSelectedOption2((prevOption) => (prevOption === option ? null : option));
    setFormData({
      ...formData,
      pago: option,
    });
  };
  //Comprueba que los terminos estén aceptados
  const handleChangeCheckbox = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  // Función que recoge la tarjeta introducida y oculta el numero mostrando solo los 4 últimos dígitos
  const mostrarUltimos4Digitos = (numeroCompleto) => {
    const longitudTotal = numeroCompleto.length;
    const ultimos4Digitos = numeroCompleto.slice(-4);
    const ocultar = Array.from({ length: longitudTotal - 1 }, (_, index) =>
      (index + 1) % 5 === 0 ? " " : "*"
    ).join("");
    return ocultar + ultimos4Digitos;
  };

  //Función que transforma el pago selecionado en la imagen a mostrar en el resumen
  const obtenerURLImagenPago = (metodoPago) => {
    switch (metodoPago) {
      case "opcionA":
        return selectedOption2 === "opcionA" ? paypal : empty;
      case "opcionB":
        return selectedOption2 === "opcionB" ? visa : empty;
      case "opcionC":
        return selectedOption2 === "opcionC" ? mastercard : empty;
      case "opcionD":
        return selectedOption2 === "opcionD" ? empty : empty;
      case "opcionE":
        return selectedOption2 === "opcionE" ? empty : empty;
      default:
        return "";
    }
  };

  //Función que transforma el vehícullo selecionado en la imagen a mostrar en el resumen
  const obtenerURLImagenVehiculo = (vehiculoSel) => {
    switch (vehiculoSel) {
      case "opcion1":
        return selectedOption1 === "opcion1" ? car : empty;
      case "opcion2":
        return selectedOption1 === "opcion2" ? bike : empty;
      case "opcion3":
        return selectedOption1 === "opcion3" ? van : empty;
      default:
        return "";
    }
  };

  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (option) => {
    setHoveredButton(option);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  //CÓDIGO
  return (
    <main>
      <div className="payment">
        {/*----------------- COLUMNA CENTRAL ----------------- */}
        <div className="container-left"></div>
        <div className="container-mid">
          <div className="formulario-reserva">
            <h4 className="bold">Datos de la reserva</h4>
            <form onSubmit={handleSubmit} className="form-reserva">
              <fieldset>
                <legend htmlFor="nombre">Nombre *</legend>
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
                <legend htmlFor="apellidos">Apellidos *</legend>
                <input
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  placeholder="Escribe tus apellidos..."
                  required
                />
              </fieldset>
              <fieldset>
                <legend htmlFor="telefono">Teléfono *</legend>
                <div style={{ display: "flex" }}>
                  <input
                    type="text"
                    id="prefijo"
                    name="prefijo"
                    value={formData.prefijo}
                    onChange={handleChange}
                    placeholder="+34"
                    required
                    style={{ width: 40, marginRight: "0.3ch" }}
                  />
                  <input
                    type="text"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Número de teléfono..."
                    required
                  />
                </div>
              </fieldset>
              <fieldset>
                <legend htmlFor="email">Correo Electrónico *</legend>
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
              <fieldset className="long-fieldset">
                <legend htmlFor="vehiculo">Tipo de vehículo *</legend>
                <div className="button-seleccion">
                  <button
                    className={`option-button ${
                      selectedOption1 === "opcion1" ? "selected" : ""
                    } ${hoveredButton === "opcion1" ? "hovered" : ""}`}
                    onMouseEnter={() => handleMouseEnter("opcion1")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleOption1Click("opcion1")} >
                    <img src={selectedOption1 === "opcion1" ? carSel : car} alt="Opción 1"/>
                    {hoveredButton === "opcion1" && ( <span className="button-text"> {hoveredButton === "opcion1" ? "Coche" : ""} </span> )}
                  </button>
                  <button
                    className={`option-button ${
                      selectedOption1 === "opcion2" ? "selected" : ""
                    } ${hoveredButton === "opcion2" ? "hovered" : ""}`}
                    onMouseEnter={() => handleMouseEnter("opcion2")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleOption1Click("opcion2")}
                  >
                    <img src={selectedOption1 === "opcion2" ? bikeSel : bike} alt="Opción 2" />{" "}
                    {hoveredButton === "opcion2" && ( <span className="button-text">  {hoveredButton === "opcion2" ? "Moto" : ""} </span> )}
                  </button>
                  <button
                    className={`option-button ${
                      selectedOption1 === "opcion3" ? "selected" : ""
                    } ${hoveredButton === "opcion3" ? "hovered" : ""}`}
                    onMouseEnter={() => handleMouseEnter("opcion3")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleOption1Click("opcion3")}
                  >
                    <img src={selectedOption1 === "opcion3" ? vanSel : van} alt="Opción 3" />
                    {hoveredButton === "opcion3" && ( <span className="button-text"> {hoveredButton === "opcion3" ? "Furgoneta" : ""} </span> )}
                  </button>
                </div>
              </fieldset>
              <fieldset>
                <legend htmlFor="matricula">Matrícula *</legend>
                <input
                  type="text"
                  id="matricula"
                  name="matricula"
                  value={formData.matricula}
                  onChange={handleChange}
                  placeholder="Escribe la matrícula..."
                  required
                />
              </fieldset>

              <fieldset>
                <legend htmlFor="marca">Marca *</legend>
                <input
                  type="text"
                  id="marca"
                  name="marca"
                  value={formData.marca}
                  onChange={handleChange}
                  placeholder="Escribe la marca..."
                  required
                />
              </fieldset>

              <fieldset>
                <legend htmlFor="modelo">Modelo *</legend>
                <input
                  type="text"
                  id="modelo"
                  name="modelo"
                  value={formData.modelo}
                  onChange={handleChange}
                  placeholder="Escribe el modelo..."
                  required
                />
              </fieldset>
            </form>
          </div>

          <div className="formulario-pago">
            <h4 className="bold">Datos del pago</h4>
            <form onSubmit={handleSubmit} className="form-reserva">
              <fieldset className="long-fieldset">
                <legend htmlFor="pago">Método de pago *</legend>
                <div className="button-seleccion">
                  <button
                    className={`option-button ${
                      selectedOption2 === "opcionA" ? "selected" : ""
                    } ${hoveredButton === "opcionA" ? "hovered" : ""}`}
                    onMouseEnter={() => handleMouseEnter("opcionA")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleOption2Click("opcionA")}
                  >
                    <img src={paypal} alt="Opción A" />
                    {hoveredButton === "opcionA" && ( <span className="button-text"> {hoveredButton === "opcionA" ? "PayPal" : ""} </span> )}
                  </button>
                  <button
                    className={`option-button ${
                      selectedOption2 === "opcionB" ? "selected" : ""
                    } ${hoveredButton === "opcionB" ? "hovered" : ""}`}
                    onMouseEnter={() => handleMouseEnter("opcionB")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleOption2Click("opcionB")}
                  >
                    <img src={visa} alt="Opción B" />
                    {hoveredButton === "opcionB" && ( <span className="button-text">  {hoveredButton === "opcionB" ? "Visa" : ""} </span> )}
                  </button>
                  <button
                    className={`option-button ${
                      selectedOption2 === "opcionC" ? "selected" : ""
                    } ${hoveredButton === "opcionC" ? "hovered" : ""}`}
                    onMouseEnter={() => handleMouseEnter("opcionC")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleOption2Click("opcionC")}
                  >
                    <img src={mastercard} alt="Opción C" />
                    {hoveredButton === "opcionC" && (  <span className="button-text"> {hoveredButton === "opcionC" ? "Mastercard" : ""} </span> )}
                  </button>
                  <button
                    className={`option-button ${
                      selectedOption2 === "opcionD" ? "selected" : ""
                    } ${hoveredButton === "opcionD" ? "hovered" : ""}`}
                    onMouseEnter={() => handleMouseEnter("opcionD")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleOption2Click("opcionD")}
                  >
                    <img  src={empty} alt="Opción D" />
                    {hoveredButton === "opcionD" && ( <span className="button-text"> {hoveredButton === "opcionD" ? "Opción D" : ""}  </span>  )}
                  </button>
                  <button
                    className={`option-button ${
                      selectedOption2 === "opcionE" ? "selected" : ""
                    } ${hoveredButton === "opcionE" ? "hovered" : ""}`}
                    onMouseEnter={() => handleMouseEnter("opcionE")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleOption2Click("opcionE")}
                  >
                    <img src={empty} alt="Opción E" />
                    {hoveredButton === "opcionE" && ( <span className="button-text">{hoveredButton === "opcionE" ? "Opción E" : ""} </span>)}
                  </button>
                </div>
              </fieldset>
              <fieldset>
                <legend htmlFor="tarjeta">Número de tarjeta *</legend>
                <input
                  type="text"
                  id="tarjeta"
                  name="tarjeta"
                  value={formData.tarjeta}
                  onChange={handleChange}
                  placeholder="Número de tarjeta"
                  maxLength="16"
                  pattern="\d*"
                  required
                />
              </fieldset>
              <fieldset>
                <legend htmlFor="caduc">Fecha de caducidad *</legend>
                <input
                  type="text"
                  id="caduc"
                  name="caduc"
                  value={formData.caduc}
                  onChange={handleChange}
                  placeholder="dd/mm/aaaa"
                  required
                />
              </fieldset>
              <fieldset className="short-fieldset">
                <legend htmlFor="cvc">CVC *</legend>
                <input
                  type="text"
                  id="cvc"
                  name="cvc"
                  value={formData.cvc}
                  onChange={handleChange}
                  placeholder="CVC"
                  required
                />
              </fieldset>
            </form>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="terminos"
                name="terminos"
                checked={formData.terminos}
                onChange={handleChangeCheckbox}
                required
              />
              <label htmlFor="terminos">Accepto los{" "}<span className="red_word">terminos y condiciones</span> *</label>
            </div>
          </div>
        </div>
        {/*----------------- COLUMNA DERECHA ----------------- */}
        <div className="container-right">
          <div className="form-summary">
            <div className="sum-parking">
              <h4 className="bold">PARKING ION SMART</h4>
              <h5 className="sum-text">Dirección del parquing</h5>
            </div>
            <div className="sum-divider"></div>
            <div className="sum-dates">
              <h5 className="bold">Entrada</h5>
              <div className="sum-dates-in">
                <div className="sum-dates-in-date">
                  <img src={date} alt="in-date" />
                  <h5 className="sum-text">dd/mm/aaaa</h5>
                </div>
                <div className="sum-dates-out-clock">
                  <img src={clock} alt="in-clock" />
                  <h5 className="sum-text">00:00</h5>
                </div>
              </div>
              <h5 className="bold">Salida</h5>
              <div className="sum-dates-out">
                <div className="sum-dates-out-date">
                  <img src={date} alt="out-date" />
                  <h5 className="sum-text">dd/mm/aaaa</h5>
                </div>
                <div className="sum-dates-out-clock">
                  <img src={clock} alt="out-clock" />
                  <h5 className="sum-text">00:00</h5>
                </div>
              </div>
            </div>
            <div className="sum-divider"></div>
            {formData.matricula && (
              <div className="sum-matricula">
                <img src={obtenerURLImagenVehiculo(formData.vehiculo)} className="img-sum" alt={formData.vehiculo} />
                <h5 className="sum-text">{formData.matricula.toUpperCase()}</h5>
              </div>
            )}
            {formData.matricula && <div className="sum-divider"></div>}
            {formData.tarjeta && (
              <div className="sum-tarjeta">
                <img src={obtenerURLImagenPago(formData.pago)}  className="img-sum" alt={formData.pago} />
                <h5 className="sum-text"> {mostrarUltimos4Digitos(formData.tarjeta)}  </h5>
              </div>
            )}
            {formData.tarjeta && <div className="sum-divider"></div>}
            <div className="sum-total">
              <h5 className="bold">Total</h5>
              <h5 className="bold sum-price">10€</h5>
            </div>
            <div className="sum-button">
              <button type="submit">
                <h5>CONFIRMAR PAGO</h5>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Payment;
