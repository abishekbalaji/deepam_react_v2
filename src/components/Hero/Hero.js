import TextTransition, { presets } from "react-text-transition";

import videoBg from "../../assets/videos/video.mp4";
import posterBg from "../../assets/poster.png";

import "./Hero.scss";
import { useEffect, useState } from "react";

const TEXTS = [
  "Speed like no other",
  "Fastest growing company",
  "Demolition with safety",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="hero_section">
      <div className="hero-section_title-container">
        <h1 className="hero-section_title">DEEPAM ENGINEERING</h1>
        <h4 className="hero-section_subtitle">
          <TextTransition springConfig={presets.slow}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </h4>
      </div>
      <div className="hero-section_overlay"></div>
      <div className="hero-section_video-container">
        <video
          id="videoBG"
          src={videoBg}
          muted
          autoPlay
          loop
          poster={posterBg}
        />
      </div>
    </div>
  );
};

export default Hero;
