//LIBRERIAS
import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";

//CSS
import "./modal.css";
import "react-datepicker/dist/react-datepicker.css";

//IMÁGENES
import car from "../../img/icons/car.svg";
import carSel from "../../img/icons/car_sel.svg";
import bike from "../../img/icons/bike.svg";
import bikeSel from "../../img/icons/bike_sel.svg";
import van from "../../img/icons/van.svg";
import vanSel from "../../img/icons/van_sel.svg";
import cam from "../../img/icons/cam.svg";
import camSel from "../../img/icons/camSel.svg";
import hours from "../../img/icons/hours.svg";
import hourSel from "../../img/icons/hourSel.svg";
import dis from "../../img/icons/dis.svg";
import disSel from "../../img/icons/disSel.svg";
import calendarIcon from "../../img/icons/date.svg";
import clockIcon from "../../img/icons/clock.svg";


/*----------------------------- CONSTANTES FECHA Y  HORA -------------------------------- */
//Constante que define el sector para el selector de fecha
const CustomDatePicker = ({ selectedDate, onDateChange, placeholderText }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onDateChange}
      placeholderText={placeholderText}
      dateFormat="dd/MM/yyyy"
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
  );
};

//Constante que define el sector para el selector de hora
const CustomTimePicker = ({ selectedTime, onTimeChange, placeholderText }) => {
  return (
    <DatePicker
      selected={selectedTime}
      onChange={onTimeChange}
      placeholderText={placeholderText}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      dateFormat="h:mm aa"
      dropdownMode="select"
    />
  );
};


/*----------------------------- COMPONENTE PRINCIPAL MODAL -------------------------------- */
const Modal = ({ isOpen, onClose }) => {
  const today = new Date();

  // Función para cerrar el modal si se hace clic fuera de él
  const handleCloseOutsideModal = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  /*----------------------------- CARGA DE DATOS DE LOCALSTORAGE -------------------------------- */
  // Efecto para cargar los datos almacenados al abrir el modal
  useEffect(() => {
    if (isOpen) {
      // Obtiene los datos almacenados en localStorage o establece valores predeterminados
      const storedFormData = JSON.parse(localStorage.getItem("formData")) || {
        fechaEntrada: today,
        horaEntrada: today,
        fechaSalida: today,
        horaSalida: today,
        minPrice: "",
        maxPrice: "",
        vehiculo: "opcion1",
        servicios: "",
      };

      // Convierte las fechas almacenadas de cadena a objeto Date
      storedFormData.fechaEntrada = new Date(storedFormData.fechaEntrada);
      storedFormData.fechaSalida = new Date(storedFormData.fechaSalida);
      storedFormData.horaEntrada = new Date(storedFormData.horaEntrada);
      storedFormData.horaSalida = new Date(storedFormData.horaSalida);

      // Obtiene las opciones seleccionadas almacenadas en localStorage o establece valores predeterminados
      const storedSelectedOption1 =
        localStorage.getItem("selectedOption1") || "opcion1";
      const storedSelectedOptions2 =
        JSON.parse(localStorage.getItem("selectedOptions2")) || [];
      // Actualiza el estado con los datos cargados
      setFormData(storedFormData);
      setSelectedOption1(storedSelectedOption1);
      setSelectedOptions2(storedSelectedOptions2);
    }
  }, [isOpen]);

  /*----------------------------- CONTROL DE CAMBIOS EN EL FORMULARIO -------------------------------- */
  // Define el estado del formulario de filtro
  const [formData, setFormData] = useState({
    fechaEntrada: "",
    horaEntrada: "",
    fechaSalida: "",
    horaSalida: "",
    minPrice: "",
    maxPrice: "",
    vehiculo: "opcion1",
    servicios: "",
  });
// Función para manejar cambios en el formulario
const handleDateChange = (date, name) => {
  setFormData(prevFormData => ({
    ...prevFormData,
    [name]: date,
  }));
};

// Función para manejar cambios en la hora del formulario
const handleTimeChange = (time, name) => {
  setFormData(prevFormData => ({
    ...prevFormData,
    [name]: time,
  }));
};

// Función de devolución de llamada para manejar los cambios en PriceFilter
const handlePriceChange = (newMinValue, newMaxValue) => {
  setFormData(prevFormData => ({
    ...prevFormData,
    minPrice: newMinValue,
    maxPrice: newMaxValue,
  }));
};

  // Define el estado del vehículo seleccionado
  const [selectedOption1, setSelectedOption1] = useState("opcion1");

  // Función para manejar clics en opciones de vehículos
  const handleOption1Click = (option) => {
    setSelectedOption1((prevOption) => (prevOption === option ? null : option));
    setFormData({
      ...formData,
      vehiculo: option,
    });
  };

  // Define el estado de las opciones de servicios seleccionadas
  const [selectedOptions2, setSelectedOptions2] = useState([]);

  // Función para manejar clics en opciones de servicios
  const handleOption2Click = (option) => {
    // Verifica si la opción ya está seleccionada
    const isSelected = selectedOptions2.includes(option);
    const updatedOptions = isSelected
      ? selectedOptions2.filter((selected) => selected !== option)
      : [...selectedOptions2, option];
    // Actualiza el estado de selectedOptions2
    setSelectedOptions2(updatedOptions);
    // Actualiza el estado de formData
    setFormData({
      ...formData,
      servicios: updatedOptions,
    });
  };

  /*----------------------------- FUNCIÓN RESTABLECER Y ENVIAR/GUARDAR FORMULARIO -------------------------------- */
  // Función para manejar envíos de formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    //MUESTRA DATOS POR CONSOLA
    console.log("Datos del formulario:", formData);
    // Convierte las fechas y horas almacenadas de cadena a objeto Date
    formData.fechaEntrada = new Date(formData.fechaEntrada);
    formData.fechaSalida = new Date(formData.fechaSalida);
    formData.horaEntrada = new Date(formData.horaEntrada);
    formData.horaSalida = new Date(formData.horaSalida);

    // Almacena los datos en localStorage
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("selectedOption1", selectedOption1);
    localStorage.setItem("selectedOptions2", JSON.stringify(selectedOptions2));
    // Verifica si el elemento que causó el envío es el botón de búsqueda
    const isSearchButtonClicked =
      e.nativeEvent.submitter.classList.contains("search-button");
    // Cierra el modal si se hizo clic en el botón de búsqueda
    if (isSearchButtonClicked) {
      onClose();
    }
  };

  // Restablece el formulario a sus valores iniciales
  const handleReset = () => {
    localStorage.removeItem("formData");
    localStorage.removeItem("selectedOption1");
    localStorage.removeItem("selectedOptions2");
    // Establece valores predeterminados para el formulario y las opciones seleccionadas
    setFormData({
      fechaEntrada: today,
      horaEntrada: today,
      fechaSalida: today,
      horaSalida: today,
      minPrice: "",
      maxPrice: "",
    });
    setSelectedOption1("opcion1");
    setSelectedOptions2([]);
  };

  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (option) => {
    setHoveredButton(option);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };
  /*----------------------------- PRICEFILTER -------------------------------- */

  const PriceFilter = () => {
     // Estados para el rango de precios y el estado del arrastre
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);
    const [isDraggingMin, setIsDraggingMin] = useState(false);
    const [isDraggingMax, setIsDraggingMax] = useState(false);
    const rangeRef = useRef(null);

  // Funciones para manejar eventos de arrastre de las asas del rango de precios
    const handleMinMouseDown = () => {
      setIsDraggingMin(true);
    };

    const handleMaxMouseDown = () => {
      setIsDraggingMax(true);
    };

  // Calcula el nuevo precio según la posición del ratón durante el arrastre
    const calculateNewPrice = (clientX) => {
      const { left, width } = rangeRef.current.getBoundingClientRect();
      const percentage = (clientX - left) / width;
      const newPrice = Math.min(100, Math.max(0, percentage * 100));
      return parseFloat(newPrice.toFixed(0));
    };

    useEffect(() => {
          // Función que se ejecuta al mover el ratón durante el arrastre
      const handleMouseMove = (e) => {  
        if (isDraggingMin) {
          const newMinPrice = calculateNewPrice(e.clientX);
          // Validación: minPrice no debe ser mayor que maxPrice
          if (newMinPrice <= maxPrice) {
            setMinPrice(newMinPrice);
          }
        } else if (isDraggingMax) {
          const newMaxPrice = calculateNewPrice(e.clientX);
          // Validación: maxPrice no debe ser menor que minPrice
          if (newMaxPrice >= minPrice) {
            setMaxPrice(newMaxPrice);
          }
        }
      };
    // Función que se ejecuta al soltar el ratón
      const handleMouseUp = () => {
        setIsDraggingMin(false);
        setIsDraggingMax(false);

      };
      
      const handleGlobalMouseMove = (e) => handleMouseMove(e);
      const handleGlobalMouseUp = () => handleMouseUp();

      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleGlobalMouseMove);
        document.removeEventListener("mouseup", handleGlobalMouseUp);
      };
    }, [isDraggingMin, isDraggingMax, minPrice, maxPrice]);

    return (
      <div className="price-filter">
        <div className="price-range" ref={rangeRef}>
          <div
            className="handle"
            style={{ left: `${minPrice}%` }}
            onMouseDown={handleMinMouseDown}
          >
            <p>{minPrice} &euro;</p>
          </div>
          <div
            className="handle"
            style={{ left: `${maxPrice}%` }}
            onMouseDown={handleMaxMouseDown}
          >
            <p>{maxPrice} &euro;</p>
          </div>
        </div>
      </div>
    );
  };

  /*----------------------------- CODIGO -------------------------------- */
  return (
    <div
      className={`modal-overlay ${isOpen ? "open" : ""}`}
      onClick={handleCloseOutsideModal}
    >
      {" "}
      <div className="modal">
        <div className="filter-form-container">
          <form onSubmit={handleSubmit} className="filter-form" method="post">
            {/*----------------- FECHAS Y HORAS ----------------- */}
            <div className="filter-dates">
              <div className="filter-column">
                <label htmlFor="fecha_entrada">
                  <h4 className="bold">Entrada</h4>
                </label>
                <div className="date-time-container">
                  <img src={calendarIcon} className="calendarIcon" />
                  <CustomDatePicker
                    selectedDate={formData.fechaEntrada}
                    onDateChange={(date) =>
                      handleDateChange(date, "fechaEntrada")
                    }
                    placeholderText="dd/mm/aaaa"
                  />
                  <img src={clockIcon} className="clockIcon" />
                  <CustomTimePicker
                    selectedTime={formData.horaEntrada}
                    onTimeChange={(time) =>
                      handleTimeChange(time, "horaEntrada")
                    }
                    placeholderText="hh:mm"
                  />
                </div>
              </div>
              <div className="filter-form-divider"></div>
              <div className="column">
                <label htmlFor="fecha_salida">
                  <h4 className="bold">Salida</h4>
                </label>
                <div className="date-time-container">
                  <img
                    src={calendarIcon}
                    className="calendarIcon"
                    alt="calendarIcon"
                  />
                  <CustomDatePicker
                    selectedDate={formData.fechaSalida}
                    onDateChange={(date) =>
                      handleDateChange(date, "fechaSalida")
                    }
                    placeholderText="dd/mm/aaaa"
                  />
                  <img src={clockIcon} className="clockIcon" />
                  <CustomTimePicker
                    selectedTime={formData.horaSalida}
                    onTimeChange={(time) =>
                      handleTimeChange(time, "horaSalida")
                    }
                    placeholderText="hh:mm"
                  />
                </div>
              </div>
            </div>
            {/*----------------- RANGO PRECIOS ----------------- */}
            <div className="priceRange">
              <h4 className="bold">Rango de precio</h4>
              <div className="price-filter">
              <PriceFilter onChange={handlePriceChange} />
              </div>
            </div>
            {/*----------------- TIPO VEHICULO ----------------- */}
            <div className="filter-vehicle">
              <h4 className="bold">Tipo de vehículo</h4>
              <div className="button-seleccion">
                <button
                  className={`option-button ${
                    selectedOption1 === "opcion1" ? "selected" : ""
                  } ${hoveredButton === "opcion1" ? "hovered" : ""}`}
                  onMouseEnter={() => handleMouseEnter("opcion1")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleOption1Click("opcion1")}
                >
                  <img
                    src={selectedOption1 === "opcion1" ? carSel : car}
                    alt="Opción 1"
                  />
                  {hoveredButton === "opcion1" && (
                    <span className="button-text">
                      {hoveredButton === "opcion1" ? "Coche" : ""}
                    </span>
                  )}
                </button>

                <button
                  className={`option-button ${
                    selectedOption1 === "opcion2" ? "selected" : ""
                  } ${hoveredButton === "opcion2" ? "hovered" : ""}`}
                  onMouseEnter={() => handleMouseEnter("opcion2")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleOption1Click("opcion2")}
                >
                  <img
                    src={selectedOption1 === "opcion2" ? bikeSel : bike}
                    alt="Opción 2"
                  />{" "}
                  {hoveredButton === "opcion2" && (
                    <span className="button-text">
                      {hoveredButton === "opcion2" ? "Moto" : ""}{" "}
                    </span>
                  )}
                </button>
                <button
                  className={`option-button ${
                    selectedOption1 === "opcion3" ? "selected" : ""
                  } ${hoveredButton === "opcion3" ? "hovered" : ""}`}
                  onMouseEnter={() => handleMouseEnter("opcion3")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleOption1Click("opcion3")}
                >
                  <img
                    src={selectedOption1 === "opcion3" ? vanSel : van}
                    alt="Opción 3"
                  />
                  {hoveredButton === "opcion3" && (
                    <span className="button-text">
                      {" "}
                      {hoveredButton === "opcion3" ? "Furgoneta" : ""}{" "}
                    </span>
                  )}
                </button>
              </div>
            </div>
            {/*----------------- SERVICIOS DISPONIBLES ----------------- */}
            <div className="filter-services">
              <h4 className="bold">Servicios Disponibles</h4>
              <div className="button-seleccion">
                <button
                  className={`option-button ${
                    selectedOptions2.includes("opcionA") ? "selected" : ""
                  } ${hoveredButton === "opcionA" ? "hovered" : ""}`}
                  onMouseEnter={() => handleMouseEnter("opcionA")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleOption2Click("opcionA")}
                >
                  <img
                    src={selectedOptions2.includes("opcionA") ? camSel : cam}
                    alt="Opción A"
                  />
                  {hoveredButton === "opcionA" && (
                    <span className="button-text">
                      {hoveredButton === "opcionA" ? "CCTV" : ""}
                    </span>
                  )}
                </button>

                <button
                  className={`option-button ${
                    selectedOptions2.includes("opcionB") ? "selected" : ""
                  } ${hoveredButton === "opcionB" ? "hovered" : ""}`}
                  onMouseEnter={() => handleMouseEnter("opcionB")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleOption2Click("opcionB")}
                >
                  <img
                    src={selectedOptions2.includes("opcionB") ? hourSel : hours}
                    alt="Opción B"
                  />
                  {hoveredButton === "opcionB" && (
                    <span className="button-text">
                      {hoveredButton === "opcionB" ? "Horario" : ""}
                      <br />
                      {hoveredButton === "opcionB" ? "flexible" : ""}
                    </span>
                  )}
                </button>

                <button
                  className={`option-button ${
                    selectedOptions2.includes("opcionC") ? "selected" : ""
                  } ${hoveredButton === "opcionC" ? "hovered" : ""}`}
                  onMouseEnter={() => handleMouseEnter("opcionC")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleOption2Click("opcionC")}
                >
                  <img
                    src={selectedOptions2.includes("opcionC") ? disSel : dis}
                    alt="Opción C"
                  />
                  {hoveredButton === "opcionC" && (
                    <span className="button-text">
                      {hoveredButton === "opcionC" ? "Mobilidad" : ""}
                      <br />
                      {hoveredButton === "opcionC" ? "reducida" : ""}
                    </span>
                  )}
                </button>
              </div>
              <div className="final-button-container">
                <button
                  type="reset"
                  className="reset-button"
                  onClick={handleReset}
                >
                  <h5 className="bold red_word">Restablecer</h5>
                </button>
                <button type="submit" className="search-button">
                  <h5 className="bold">Buscar</h5>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
