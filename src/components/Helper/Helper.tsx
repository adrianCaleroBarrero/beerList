import Intercom from "../Icons/Intercom";
import Phone from "../Icons/Phone";
import "./Helper.scss";

import React from "react";

export default function Helper() {
  return (
    <div className='helper'>
      <h3 className='helper-text'>¿Podemos ayudarle?</h3>
      <div className='helper-icons'>
        <Intercom />
        <Phone />
      </div>
    </div>
  );
}
