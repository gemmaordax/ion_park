//LIBRERIAS
import React, { useState} from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

//CSS
import "./Map.css";

//COMPONENTES
import Modal from "../../components/modal/modal.jsx";
import ParkingCard from "../../components/parkingCard/parkingCard";

//IMÁGENES
import filter from "../../img/icons/bi_filter-left.svg";
import orden from "../../img/icons/orden.svg";



/*----------------------------- CONSTANTE MAPA -------------------------------- */
const Map = () => {
  //MAPA GOOGLE
const apiKey = 'AIzaSyDEhDMbfAdCEuvQA2ZrSaeTE-wwWS03J5I'; 
const center = {
  lat: 41.3851,
  lng: 2.1734,
};


  //CONTROL DEL MODAL
  const [isModalOpen, setModalOpen] = useState(false);
  // Función para abrir el modal
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  // Función para cerrar el modal
  const handleModalClose = () => {
    setModalOpen(false);
  };

  //CÓDIGO
  return (
    <main>
      <div className="Map">
        <div className="map-container-left">
          <div className="map-results-cont">
            <h4 className="bold">88 Resultados</h4>
            <div className="options-results">
              <button className="filter-button" onClick={handleModalOpen}>
                <img className="filtrarIcon" src={filter} />
                <h5>Filtrar</h5>
              </button>
              {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={handleModalClose} />
              )}
              <button className="order-button">
              <img className="order-icon" src={orden} />
                <h5>Ordenar</h5>
              </button>
            </div>
            <ParkingCard />
          </div>
        </div>
        <div className="map-container-right">
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={{ height: "88vh", width: "100%" }}
              center={center}
              zoom={14}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </main>
  );
};

export default Map;
