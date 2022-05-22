import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModel = ({ date, treatment, setTreatment,refetch }) => {
  const [user] = useAuthState(auth);
  const { name, slots, _id } = treatment;
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const formateDate = format(date, "PP");
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formateDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Appointment is booked ${formateDate} at ${slot}`);
        } else {
          toast(` Already have an appointment at ${data.booking?.date} at ${data.booking?.slot}`);
        }
        refetch()
        toast.success('Successfully booked')
        setTreatment(null);
      });
  };

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
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              readOnly
              value={user?.displayName || "Anonymous"}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || "Anonymous@mail.com"}
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
