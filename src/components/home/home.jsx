//LIBRERIAS
import React from "react";
import { Link } from "react-router-dom";

//CSS
import "../home/home.css";

//IMÁGENES
import mobile from "../../img/assets/mobile-app.png";

//IMÁGENES SVG
import mapIcon from "../../img/icons/map-linear.svg";
import search from "../../img/icons/search.svg";
import mouse from "../../img/icons/mouse.svg";
import sencillo from "../../img/icons/radix-icons_mobile.svg";
import rapido from "../../img/icons/time.svg";
import facil from "../../img/icons/ph_hand.svg";
import seguro from "../../img/icons/ic_baseline-security.svg";
import android from "../../img/icons/android-icon.svg";
import ios from "../../img/icons/ios-icon.svg";
import star from "../../img/icons/Star.svg";
import backgroundMap from "../../img/icons/background_home.svg";

//CÓDIGO
function Home() {
  return (
    <main>
      {/*----------------- PRIMERA PAGINA ----------------- */}
      <div id="first-container">
        <div className="map-presentacio">
          <img
            src={backgroundMap}
            className=".background-map"
            alt=".background-map"
          ></img>
        </div>
        <div className="presentacio">
          <h1>LA SOLUCIÓN A TUS PROBLEMAS DE PARKING</h1>
          <h3>
            Con <span className="red_word">IONPARK</span>, podrás reservar una
            plaza de parking desde donde estés, sin necesidad de preocuparte por
            quedarte sin plaza.
          </h3>
          <div className="form-container">
            <form className="home-form" method="post">
              <div className="column">
                <label htmlFor="direccion">Dirección</label>
                <input
                  type="text"
                  id="direccion"
                  name="direccion"
                  placeholder="Introduce la dirección"
                  required
                />
              </div>
              <div className="form-divider"></div>
              <div className="column">
                <label htmlFor="fecha_entrada">Entrada</label>
                <div className="date-time-container">
                  <input
                    type="date"
                    id="fecha_entrada"
                    name="fecha_entrada"
                    required
                  />
                  <input
                    type="time"
                    id="hora_entrada"
                    name="hora_entrada"
                    required
                  />
                </div>
              </div>
              <div className="form-divider"></div>
              <div className="column">
                <label htmlFor="fecha_salida">Salida</label>
                <div className="date-time-container">
                  <input
                    type="date"
                    id="fecha_salida"
                    name="fecha_salida"
                    required
                  />
                  <input
                    type="time"
                    id="hora_salida"
                    name="hora_salida"
                    required
                  />
                </div>
              </div>
              <div className="button-container">
                <button type="submit">
                  <img src={search} />
                </button>
              </div>
            </form>
          </div>
          <div className="button-map">
            <button type="submit">
            <Link to="/map">
                <img className="img-mapa" src={mapIcon} />
                <h3>MAPA</h3>{" "}
              </Link>
            </button>
          </div>
        </div>
        <div className="mouse">
          <img src={mouse} alt="mouse"></img>
        </div>
      </div>
      {/*----------------- SEGUNDA PAGINA ----------------- */}
      <div id="second-container">
        <div className="caracteristicas">
          <div className="first-line">
            <div className="item">
              <div className="image-container">
                <img src={sencillo} alt="sencillo" />
              </div>
              <div className="text-container">
                <h2 className="red_word bold">SENCILLO</h2>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="image-container">
                <img src={rapido} alt="rapido" />
              </div>
              <div className="text-container">
                <h2 className="red_word bold">RÁPIDO</h2>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
              </div>
            </div>
          </div>
          <div className="second-line">
            <div className="item">
              <div className="image-container">
                <img src={facil} alt="facil" />
              </div>
              <div className="text-container">
                <h2 className="red_word bold">FÁCIL</h2>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="image-container">
                <img src={seguro} alt="seguro" />
              </div>
              <div className="text-container">
                <h2 className="red_word bold">SEGURO</h2>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/*----- MENÚ LATERAL ----- */}
        <div className="menu">
          <div className="seleccion">
            <div className="menu-selected">
              <h5 className="red_word">CARACTERÍSTICAS</h5>
              <div className="menu-divider"></div>
              <div className="menu-button">
                <a href="#second-container" className="menu-full"></a>
              </div>
            </div>
          </div>
          <div className="seleccion">
            <div className="menu-button">
              <a href="#third-container" className="menu-empty"></a>
            </div>
          </div>
          <div className="seleccion">
            <div className="menu-button">
              <a href="#fourth-container" className="menu-empty"></a>
            </div>
          </div>
        </div>
      </div>

      {/*----------------- TERCERA PAGINA ----------------- */}
      <div id="third-container">
        <div className="black-background">
          <div className="aplicacion">
            <img src={mobile} className="mobile" alt="mobile"></img>
            <div className="aplication-text">
              <h1>
                ¡DESCARGA NUESTRA <br />
                <span className="white_word">APLICACIÓN!</span>
              </h1>
              <h3 className="white_word">
                Con la aplicación de <span className="red_word">IONPARK</span>,
                podrás reservar tu plaza de parking des de dónde estés. Fácil de
                usar, rápida e intuitiva.
              </h3>
              <h3 className="text-change white_word">Disponible para</h3>
              <div className="mobile-icon">
                <img src={android} className="android" alt="android"></img>
                <img src={ios} className="ios" alt="ios"></img>
              </div>
            </div>
          </div>
          {/*----- MENÚ LATERAL ----- */}
          <div className="menu">
            <div className="seleccion">
              <div className="menu-button">
                <a href="#second-container" className="menu-empty"></a>
              </div>
            </div>
            <div className="seleccion">
              <div className="menu-selected">
                <h5 className="red_word">APLICACIÓN</h5>
                <div className="menu-divider"></div>
                <div className="menu-button">
                  <a href="#third-container" className="menu-full"></a>
                </div>
              </div>
            </div>
            <div className="seleccion">
              <div className="menu-button">
                <a href="#fourth-container" className="menu-empty"></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*----------------- CUARTA PAGINA ----------------- */}
      <div id="fourth-container">
        <div className="valoraciones">
          <div className="val">
            <div className="val-column">
              <div className="column-content">
                <h1 className="red_word">+1M</h1>
                <h6 className="red_word">USUARIOS</h6>
              </div>
            </div>
            <div className="val-divider"></div>
            <div className="val-column">
              <div className="column-content">
                <h1 className="red_word">+250</h1>
                <h6 className="red_word">PARKINGS</h6>
              </div>
            </div>
            <div className="val-divider"></div>
            <div className="val-column">
              <div className="column-content">
                <h1 className="red_word">+20</h1>
                <h6 className="red_word">CIUDADES</h6>
              </div>
            </div>
          </div>
          <div className="stars">
            <img src={star} className="star" alt="star"></img>
            <img src={star} className="star" alt="star"></img>
            <img src={star} className="star" alt="star"></img>
            <img src={star} className="star" alt="star"></img>
            <img src={star} className="star" alt="star"></img>
          </div>
        </div>
        {/*----- MENÚ LATERAL ----- */}
        <div className="menu">
          <div className="seleccion">
            <div className="menu-button">
              <a href="#second-container" className="menu-empty"></a>
            </div>
          </div>
          <div className="seleccion">
            <div className="menu-button">
              <a href="#third-container" className="menu-empty"></a>
            </div>
          </div>
          <div className="seleccion">
            <div className="menu-selected">
              <h5 className="red_word">VALORACIONES</h5>
              <div className="menu-divider"></div>
              <div className="menu-button">
                <a href="#fourth-container" className="menu-full"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
