//LIBRERIAS
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

//CSS
import "../navbar/navbar.css";

//IMÁGENES SVG
import logo from "../../img/icons/full_logo.svg";
import polygon from "../../img/icons/polygon.svg";

function Navbar() {
  //CONSTANTES
  //Define la página dónde nos encontramos
  const location = useLocation();
  //CÓDIGO
  return (
    <>
      <header>
        <div className="navbar-left">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>
        <div className="navbar-right">
          <ul>
            <li className={location.pathname === "/" ? "nav-selected" : ""}>
              <Link to="/">Inicio</Link>
            </li>
            <li className={location.pathname === "/empresa" ? "nav-selected" : ""}>
              <Link to="/empresa">Empresa</Link>
            </li>
            <li className={location.pathname === "/contacto" ? "nav-selected" : ""}>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li className={location.pathname === "/login" ? "nav-selected" : ""}>
              <Link to="/login">Mi cuenta</Link>
            </li>
            <li>
              <div className="language-content">
                <img src={polygon} className="polygon" alt="polygon" />
                <Link to="/">ES</Link>
              </div>
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
