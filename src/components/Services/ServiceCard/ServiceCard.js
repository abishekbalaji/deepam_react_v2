// import SERVICES from "../../../SERVICES_OBJECT";

import "./ServiceCard.scss";

const ServiceCard = ({ service }) => {
  const { img, title, content } = service;
  //   const service = SERVICES[0].services[0];
  return (
    <div className="service-card_container">
      <img width={280} height={240} src={img} alt="service" />
      <div className="service-card_text-container">
        <h3 className="service-card_text-title">{title}</h3>
        <span className="service-card_text-content">{content}</span>
      </div>
    </div>
  );
};
export default ServiceCard;
