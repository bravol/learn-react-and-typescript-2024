import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import Logo from "../logo";
import logoSrc from "./../../assets/images/logo.png";
import s from "./style.module.css";

export default function Header(props) {
  const navigate = useNavigate();
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
      <div className="col-xs-12 col-sm-8 text-end">
        <Button onClick={() => navigate("/note/new")}>Add note +</Button>
      </div>
    </div>
  );
}
