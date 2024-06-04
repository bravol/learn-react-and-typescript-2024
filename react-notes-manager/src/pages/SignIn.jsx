import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthAPI } from "../api/authAPI";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import { AuthLayout } from "../layout/authLayout/AuthLayout";
import { setUser } from "../store/auth/authSlice";
import { toast } from "../utils/sweet_alert";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await AuthAPI.signin(email, password);
      dispatch(setUser(user));
      await toast("success", "Sign in is successful");
      navigate("/");
    } catch (error) {
      console.log(error);
      await toast("error", error.message);
    }
  };

  const form = (
    <div className="signInformContainer">
      <h2 className="signIntitle">
        Sign In <br />
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
          Don't have an account yet ? <Link to="/signup">Signup</Link>
        </span>
      </form>
    </div>
  );
  return <AuthLayout>{form}</AuthLayout>;
}
