import About from "../../components/About/About";
import Experties from "../../components/Experties/Experties";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home_page">
      <Hero />
      <About />
      <Services />
      <Experties />
    </div>
  );
};

export default Home;
