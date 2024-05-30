import React from "react";

const Logo = (props) => {
  return (
    <div>
      <div className="logo_container">
        <img src={props.image} alt="" className="logo_img" />
        <div className="logo_title">{props.title}</div>
      </div>
      <div className="logo_subtitle">{props.subtitle}</div>
    </div>
  );
};

export default Logo;
