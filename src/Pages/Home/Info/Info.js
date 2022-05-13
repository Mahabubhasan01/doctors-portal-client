import React from "react";
import InfoCard from "./InfoCard/InfoCard";
import clock from "../../../assets/icons/clock.svg";
import map from "../../../assets/icons/marker.svg";
import call from "../../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
      <InfoCard cardTitle="Opening Hours" bgClass="accent" img={clock} />
      <InfoCard
        cardTitle="Visit our locations"
        bgClass="bg-gradient-to-r from-cyan-500 to-blue-500"
        img={map}
      />
      <InfoCard cardTitle="Contact us now" bgClass="accent" img={call} />
    </div>
  );
};

export default Info;
