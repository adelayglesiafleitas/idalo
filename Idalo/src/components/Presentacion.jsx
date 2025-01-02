import "./Presentacion.css";

import logo from "../assets/logo_pagina inicial.png";
const Presentacion = () => {
  return (
    <>
      <main>
        <div className="bordes">
          <img src={logo} alt="logo de la pagina inicial" id="logo_inicial" />
        </div>
      </main>
    </>
  );
};

export default Presentacion;
