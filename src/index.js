import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // Importar BrowserRouter
import App from "./App";

// Asegúrate de que el basename sea el nombre del repositorio
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/ion_park">  {/* Aquí se especifica la URL base */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);