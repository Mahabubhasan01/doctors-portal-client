import React from "react";
import { format } from "date-fns";

const BookingModel = ({ date, treatment, setTreatment }) => {
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    setTreatment(null);
  };
  const { name, slots } = treatment;
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-primary">
            Booking for : {name}!
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 justify-items-center gap-3"
          >
            <input
              name="slot"
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs mt-3"
            />
            <select className="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModel;
