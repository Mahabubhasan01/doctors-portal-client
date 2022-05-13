import React from "react";
import bg from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor-small.png";
import PrimaryButton from "../../Shared/PrimaryButton";

const Appointment = () => {
  return (
    <section style={{background:`url(${bg})`}}
     className="flex justify-center items-center my-40">
        <div className="flex-1">
            <img className="mt-[-100px] hidden lg:block" src={doctor} alt="" />
        </div>
        <div className="flex-1 md:w-full">
            <h3 className="text-primary text-xl ">Appointment</h3>
            <h2 className="text-3xl text-white">Make an appointment today</h2>
            <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like read</p>
            <PrimaryButton>Get started</PrimaryButton>
        </div>
    </section>
  );
};

export default Appointment;
