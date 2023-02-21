import ServiceLinks from "./ServiceLinks/ServiceLinks";

import SERVICES from "../../SERVICES_OBJECT";
import "./Services.scss";
import ServiceList from "./ServiceList/ServiceList";

const Services = () => {
  return (
    <div className="service-section_container">
      <div className="service-section_overlay"></div>
      <div className="service_section">
        <h1 className="service-section_title">OUR SERVICES</h1>
        <ServiceLinks />
        {SERVICES.map((service) => (
          <ServiceList service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
