import "./Footer.scss";

import React from "react";
import LineSeparator from "../Common/LineSeparator";
import Instagram from "../Icons/Instagram";

export default function Footer() {
  return (
    <div className='footer'>
      <p>SOBRE NOSOTROS</p>
      <p>MEDIDAS DE SEGURIDAD (COVID-19)</p>
      <p>CÓMO MERCAR</p>
      <p>PROVEEDORES</p>
      <p>CONTÁCTENOS</p>
      <p>ZONA DE COBERTURA</p>
      <LineSeparator width='10%' color='#C8D5D9' margin='27px 0 36px 0' />
      <Instagram />
      <p>POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES</p>
    </div>
  );
}
