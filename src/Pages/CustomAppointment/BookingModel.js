import React from "react";
import { format } from "date-fns";

const BookingModel = ({ date, treatment,setTreatment }) => {
  const handleBooking=event=>{
    event.preventDefault();
    const slot = event.target.slot.value;
  setTreatment(null)
    
  }
  const { name, slots } = treatment;
  return (
    <div>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="my-modal-6"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-primary">Booking for : {name}!</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 justify-items-center gap-3">
            <input name="slot"
              type="text"
              disabled
              value={format(date, "PP")}
              class="input input-bordered w-full max-w-xs mt-3"
            />
            <select class="select select-bordered w-full max-w-xs">
              
                {slots.map(slot=><option value={slot}>{slot}</option>)}
             
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-primary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModel;
