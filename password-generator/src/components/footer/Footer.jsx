import React from "react";
import CopyPaste from "./../../images/copyPaste.svg";

const Footer = () => {
  return (
    <div className="footer_root">
      <div>Super password</div>
      <img src={CopyPaste} alt="copyPaste" className="copy_paste" />
    </div>
  );
};

export default Footer;
