import EXPERTIES from "../../EXPERTIES";

import "./Experties.scss";

const Experties = () => {
  return (
    <div className="experties_section">
      <h1 className="experties-title">EXPERTIES</h1>
      <div className="experties_container">
        {EXPERTIES.map((item) => (
          <div className="expertie_container">
            <h2 className="expertie-title">{item.title}</h2>
            <span className="expertie-content">{item.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experties;
