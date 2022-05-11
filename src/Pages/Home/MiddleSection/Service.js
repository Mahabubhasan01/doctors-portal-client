import React from "react";

const Service = ({img,title}) => {
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dignissimos.</p>
          
        </div>
      </div>
    </div>
  );
};

export default Service;
