import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import PasswordGeneratorBody from "../password_generator_body/PasswordGeneratorBody";

function PasswordGeneratorCard() {
  return (
    <div className="root">
      <div className="main">
        <Header />
        <PasswordGeneratorBody />
      </div>

      <Footer />
    </div>
  );
}

export default PasswordGeneratorCard;
