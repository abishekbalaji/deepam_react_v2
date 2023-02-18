import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import NavContactStrip from "../NavContactStrip/NavContactStrip";
import NavSocialStrip from "../NavSocialStrip/NavSocialStrip";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <>
      <div>
        <NavSocialStrip />
        <NavContactStrip />
        <NavBar />
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
