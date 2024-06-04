import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function withAuthRequired(Component) {
  return function ProtectedComponent() {
    const navigate = useNavigate();
    const user = useSelector((store) => store.authSlice.user);
    useEffect(() => {
      if (!user) {
        navigate("/signin");
      }
    }, []);

    return user && <Component />;
  };
}
