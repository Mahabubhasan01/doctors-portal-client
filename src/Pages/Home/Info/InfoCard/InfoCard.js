import React from "react";

const InfoCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div>
      <div className={`card lg:card-side  shadow-xl bg-accent ${bgClass}`}>
        <figure className="pl-5">
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
