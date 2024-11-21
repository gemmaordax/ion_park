//LIBRERIAS
import React, { useState } from "react";

//IMÁGENES
import star from "../../img/icons/map_star.svg";
import fullHeart from "../../img/icons/ph_heart_full.svg";
import lineHeart from "../../img/icons/ph_heart_line.svg";
import parkingPic from "../../img/assets/parkingPic.jpg";

const ParkingCard = () => {

    const [isHeartFull, setHeartFull] = useState(false);

    const handleHeartClick = () => {
      setHeartFull(!isHeartFull);
    };

  return (
    <div className="map-resultados">
       {/*<Link to="/parkingDetails"> <img className="imgParking" src={parkingPic} /></Link>*/}
       <img className="imgParking" src={parkingPic} />
      <img className="heart-icon" src={isHeartFull ? fullHeart : lineHeart}  onClick={handleHeartClick} />
      <div className="textResult">
        <div className="topDetails">
           {/*<Link to="/parkingDetails"><h5 className="bold parkName">PARKING EX1</h5></Link>*/}
           <p className="bold parkName">PARKING EX1</p>
          <div className="rate-group">
            <img className="star_results" src={star} />
            <p className="bold">4'50</p>
          </div>
        </div>
        <p className="praking_direction">C/ de Valencia 35</p>
        <p className="price_results bold">12,50€</p>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default ParkingCard;