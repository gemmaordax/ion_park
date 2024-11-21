//LIBRERIAS
import React from "react";

//CSS
import "../empresa/empresa.css";

//IMÁGENES
import ImgEmpresa from "../../img/assets/empresa.png";

//CÓDIGO
function Empresa() {
  return (
    <main>
      <div className="empresa">
        <div className="texto-empresa">
          <h2>SOBRE NOSOTROS</h2>
          <p>
            Trabajamos con las{" "} <span className="red_word">últimas tecnologías </span>de la información para obtener los{" "}<span className="red_word">mejores productos</span>. Contamos con las{" "} <span className="red_word"> mejores soluciones de programación multiplataforma </span>, pudiendo dar respuesta a cualquier necesidad con el menor tiempo posible y con la mejor garantía. 
            </p>
          <p>
            El requisito primordial de todo trabajo realizado en ION, es la <span className="red_word"> excelencia</span>. Seguimos procedimientos estándar de control de la <span className="red_word"> eficiencia y eficacia</span>, obteniendo productos de alta calidad y estabilidad. 
            </p>
          <p>
            La <span className="red_word">innovación</span> es la base sobre la que se sustenta toda la actividad de ION.
          </p>
          <p>
            Centramos <span className="red_word">esfuerzos</span> continuamente para mejorar nuestros productos y soluciones con las{" "} <span className="red_word">últimas novedades</span> del mercado. Tenemos abierta una línea permanente de innovación con el fin de encontrar nuevas oportunidades de{" "}  <span className="red_word">mejora y de creación</span> de producto.
          </p>
        </div>
        <div className="imagen-empresa">
          <img src={ImgEmpresa} alt="empresa-img" />
        </div>
      </div>
    </main>
  );
}

export default Empresa;
