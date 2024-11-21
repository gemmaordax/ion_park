//LIBRERIAS
import React from "react";

//CSS
import "../footer/footer.css";

//IMÁGENES SVG
import iso from "../../img/icons/iso.svg";
import ens from "../../img/icons/ens.svg";

//CÓDIGO
function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <ul>
          <li>IONSMART 2023 Todos los derechos reservados ©</li>
          <li className="legal">
            <a href="#">Aviso legal</a> | <a href="#">Política de privacidad</a>{" "}
            | <a href="#">Política de cookies</a>
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <ul>
          <li>
            <img src={iso} className="iso" alt="iso" />
            <p>ISO<br />9001</p>
          </li>
          <li>
            <img src={iso} className="iso" alt="iso" />
            <p>
              ISO    <br />  14001
            </p>
          </li>
          <li>
            <img src={iso} className="iso" alt="iso" />
            <p>ISO<br />27001</p>
          </li>
          <li>
            <img src={ens} className="ens" alt="ens" />
            <p>CATEGORÍA<br />ALTA</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
