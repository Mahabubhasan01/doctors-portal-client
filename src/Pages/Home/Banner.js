import React from "react";
import img from  '../../assets/images/chair.png'

const Banner = () => {
  return (
    <div className="p-10 my-10">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse">
          <img
            src={img}
            className="max-w-sm rounded-lg shadow-2xl " />
          <div>
            <h1 className="text-5xl font-bold">Your new smile starts here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 uppercase font-bold text-white ">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
