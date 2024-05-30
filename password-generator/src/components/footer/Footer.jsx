import React from "react";
import CopyPaste from "./../../images/copyPaste.svg";

const Footer = ({ password }) => {
  const savePasswordToClipBoard = () => {
    navigator.clipboard.writeText(password);
  };
  return (
    <div className="footer_root">
      <div>{password}</div>
      <img
        src={CopyPaste}
        alt="copyPaste"
        className="copy_paste"
        onClick={savePasswordToClipBoard}
      />
    </div>
  );
};

export default Footer;
