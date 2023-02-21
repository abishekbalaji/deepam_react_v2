import ServiceCard from "../ServiceCard/ServiceCard";
import "./ServiceList.scss";

const ServiceList = ({ service }) => {
  const { title, services } = service;
  return (
    <div className="service-list_container">
      <h2 className="service-list_title">{title}</h2>
      <div className="service-list_services-container">
        {services.map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
