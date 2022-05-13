import React from "react";

const Services = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div>
      <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body text-center">
          <h2 class="text-xl text-center">{name}</h2>
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
          <div class="card-actions justify-center">
            <label
              for="my-modal-6"
              onClick={() => setTreatment(service)}
              disabled={slots.length === 0}
              class="btn btn-sm btn-primary text-white uppercase"
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
