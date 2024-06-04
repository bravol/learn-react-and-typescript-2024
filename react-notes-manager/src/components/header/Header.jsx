import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthAPI } from "../../api/authAPI";
import { setUser } from "../../store/auth/authSlice";
import { loggedInUser } from "../../store/auth/auth_selector";
import Logo from "../logo";
import logoSrc from "./../../assets/images/logo.png";
import s from "./style.module.css";

export default function Header(props) {
  const navigate = useNavigate();
  const user = useSelector(loggedInUser);
  const dispatch = useDispatch();
  //signout user
  const signout = () => {
    AuthAPI.signout();
    dispatch(setUser(null));
  };
  //get user details
  const userProfile = () => {
    return (
      <div>
        <img
          src={`https://api.dicebear.com/5.x/bottts/svg?seed=${user.email}`}
          alt="logout"
          style={{ width: 40 }}
          className="rounded-circle"
        />
        <div> Hello , {user.email}</div>
        <Link to="#" onClick={signout}>
          Signout
        </Link>
      </div>
    );
  };
  return (
    <div className={`row ${s.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo
          onClick={() => navigate("/")}
          title="Notomatic"
          subtitle={"Manage your notes"}
          image={logoSrc}
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">{userProfile()}</div>
    </div>
  );
}
