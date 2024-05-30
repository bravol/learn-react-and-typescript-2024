import React from "react";
import LockIcon from "./../../images/lock.svg";

const Header = () => {
  return (
    <div className="header_root">
      <div className="header_title">Password Generator</div>
      <img src={LockIcon} alt="lock icon" className="header_icon" />
    </div>
  );
};

export default Header;
