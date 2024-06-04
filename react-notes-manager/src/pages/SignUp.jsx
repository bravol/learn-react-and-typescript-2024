import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthAPI } from "../api/authAPI";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import { AuthLayout } from "../layout/authLayout/AuthLayout";
import { setUser } from "../store/auth/authSlice";
import { toast } from "../utils/sweet_alert";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    if (password === passwordC) {
      try {
        const user = await AuthAPI.signup(email, password);
        dispatch(setUser(user));
        await toast("success", "Sign Up is successful");
        navigate("/");
      } catch (error) {
        console.log(error);
        await toast("error", error.message);
      }
    } else {
      toast("error", "Passwords do not match");
    }
  };

  const form = (
    <div className="signInformContainer">
      <h2 className="signIntitle">
        Sign Up <br />
        to create your notes.
      </h2>
      <form className="signInformGroup" onSubmit={submit}>
        <Input placeholder={"Email"} onTextChange={setEmail} />
        <Input
          placeholder={"Password"}
          type={"password"}
          onTextChange={setPassword}
        />
        <Input
          placeholder={"Confirm Password"}
          type={"password"}
          onTextChange={setPasswordC}
        />

        <Button className="signInbutton" type="submit">
          Sign Up!
        </Button>
        <span>
          Already have an account yet ? <Link to="/signin">Signin</Link>
        </span>
      </form>
    </div>
  );
  return <AuthLayout>{form}</AuthLayout>;
}
