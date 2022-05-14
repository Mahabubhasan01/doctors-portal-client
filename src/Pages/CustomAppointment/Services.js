import React from "react";

const Services = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-xl text-center">{name}</h2>
          <p>
            {slots.length > 0 ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-500">Try another date.</span>
            )}{" "}
          </p>
          <p>
            {slots.length} {slots.length < 1 ? "space" : "spaces"} : available
          </p>
          <div className="card-actions justify-center">
            <label
              for="my-modal-6"
              onClick={() => setTreatment(service)}
              disabled={slots.length === 0}
              className="btn btn-sm btn-primary text-white uppercase"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
