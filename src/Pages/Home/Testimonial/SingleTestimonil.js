import React from "react";
import img from "../../../assets/images/people1.png";

const SingleTestimonil = ({ img }) => {
  return (
    <div className="p-3">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <p>
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
        </div>
        <figure className="flex justify-between items-center p-3">
          <img
            className="mr-5 w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
            src={img}
            alt="Shoes"
          />
          <div>
            <h1>Winson Henry</h1>
            <p>California</p>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default SingleTestimonil;
