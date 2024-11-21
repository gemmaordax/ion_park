//LIBRERIAS
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//CSS
import "./styles/App.css";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/styles.css";


//COMPONENTES
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";
import Home from "./components/home/home.jsx";
import Empresa from "./components/empresa/empresa.jsx";
import Contacto from "./components/contacto/contacto.jsx";
import Login from "./components/login/login.jsx";
import Payment from "./components/payment/payment.jsx";
import NoPayment from "./components/noPayment/noPayment.jsx";
import Map from "./Pages/map/Map.js";


function App() {
  return (
    <div className="App">
      <div className="content">
        
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="empresa" element={<Empresa />} />
              <Route path="contacto" element={<Contacto />} />
              <Route path="login" element={<Login />} />
              <Route path="map" element={<Map />} />
              <Route path="payment" element={<Payment />} />
              <Route path="noPayment" element={<NoPayment />} />
            </Route>
          </Routes>
     
      </div>
      <Footer />
    </div>
  );
}

export default App;
