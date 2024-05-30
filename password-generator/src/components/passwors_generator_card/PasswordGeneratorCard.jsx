import React, { useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import PasswordGeneratorBody from "../password_generator_body/PasswordGeneratorBody";

function PasswordGeneratorCard() {
  const [password, setPassword] = useState("password");
  return (
    <div className="root">
      <div className="main">
        <Header />
        <PasswordGeneratorBody setPassword={setPassword} />
      </div>

      <Footer password={password} />
    </div>
  );
}

export default PasswordGeneratorCard;
