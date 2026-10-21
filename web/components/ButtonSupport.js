"use client";

import config from "@/config";

// Abre el correo de soporte en el cliente de correo.
const ButtonSupport = () => {
  const handleClick = () => {
    window.open(`mailto:${config.resend.supportEmail}?subject=Ayuda con ${config.appName}`, "_blank");
  };
  return (
    <button className="btn btn-sm" onClick={handleClick} title="Soporte">
      Soporte
    </button>
  );
};

export default ButtonSupport;
