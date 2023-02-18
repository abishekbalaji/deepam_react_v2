import "./About.scss";

const About = () => {
  return (
    <div className="about_section">
      <div className="about-section_text">
        <h2 className="about-section_text-title">WE DELIVER WHAT WE PROMISE</h2>
        <p className="about-section_text-content">
          Construction requires a lot of Engineering knowledge and skill.
          Similarly Demolition requires expert Engineering knowledge and skill
          which we have achieved through a lot of experience and hard work. We
          at Deepam Engineering strive for perfection in everything we do with
          our world class equipments and all weather work force. We are
          committed in providing our customers with a world class service.
        </p>

        <div className="about-section_pointers-container">
          <div className="about-section_pointers-left-container">
            <h3 className="about-section_pointers-text">
              REPUTATION FOR EXCELLENCE
            </h3>
            <h3 className="about-section_pointers-text">
              GUIDED BY COMMITMENT
            </h3>
          </div>
          <div className="about-section_pointers-right-container">
            <h3 className="about-section_pointers-text">WE BUILD TRUST</h3>
            <h3 className="about-section_pointers-text">
              A TEAM OF PROFESSIONALS
            </h3>
          </div>
        </div>
      </div>
      <div className="about-section_image-container"></div>
    </div>
  );
};

export default About;
