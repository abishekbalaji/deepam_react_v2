// import NavSocialStrip from "./components/NavSocialStrip/NavSocialStrip";

import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import HighReachDemolition from "./pages/Services/HighReachDemolition/HighReachDemolition";
import Services from "./pages/Services/Services";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route
            path="/services/high-reach-demolition"
            element={<HighReachDemolition />}
          />
          <Route path="services/*" element={<Services />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
