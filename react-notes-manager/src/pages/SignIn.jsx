import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import { AuthLayout } from "../layout/authLayout/AuthLayout";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = (e) => {
    e.preventDefault();
  };

  const form = (
    <div className="signInformContainer">
      <h2 className="signIntitle">
        Signin <br />
        to access your team notes
      </h2>
      <form className="signInformGroup" onSubmit={submit}>
        <Input placeholder={"Email"} onTextChange={setEmail} />
        <Input
          placeholder={"Password"}
          type={"password"}
          onTextChange={setPassword}
        />

        <Button className="signInbutton" type="submit">
          Sign in!
        </Button>
        <span>
          Don't have an account yet ? <Link>Signup</Link>
        </span>
      </form>
    </div>
  );
  return <AuthLayout>{form}</AuthLayout>;
}
