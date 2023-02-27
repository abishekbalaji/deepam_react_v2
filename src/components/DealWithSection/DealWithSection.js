import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faSubway,
  faIndustry,
  faWarehouse,
  faRulerHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { faBuilding as faBuilding_r } from "@fortawesome/free-regular-svg-icons";

import DealWithCard from "./DealWithCard/DealWithCard";
import "./DealWithSection.scss";

const DATA = [
  { img: faBuilding, text: "Multistoried buildings and Houses" },
  { img: faBuilding_r, text: "Silos, Chimneys and Cooling towers" },
  { img: faSubway, text: "Elevated corridors and Underground metros" },
  { img: faIndustry, text: "Factories and Industrial structures" },
  { img: faWarehouse, text: "Bridges, Dams and Water tanks" },
  { img: faRulerHorizontal, text: "Sheet Piling and Shoring" },
];

const DealWithSection = () => {
  return (
    <div className="deal-with_section">
      <div className="deal-with_overlay"></div>
      {DATA.map((data) => (
        <DealWithCard>
          <FontAwesomeIcon className="deal-with_icon" icon={data.img} />
          <span className="deal-with_text">{data.text}</span>
        </DealWithCard>
      ))}
    </div>
  );
};

export default DealWithSection;
