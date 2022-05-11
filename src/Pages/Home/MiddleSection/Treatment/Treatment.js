import React from "react";
import treatment from '../../../../assets/images/treatment.png'
import PrimaryButton from "../../../Shared/PrimaryButton";

const Treatment = () => {
  return (
    <div>
      <div class="card card-side shadow-xl container m-5">
        <figure>
          <img
            src={treatment}
            alt="Movie"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">New movie is released!</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking <br /> at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed <br /> to using 'Content here, content here',<br /> making it look like readable English. Many desktop publishing packages and web page Lorem ipsum dolor <br /> sit, amet consectetur adipisicing elit. Repellendus id dicta quo voluptatum recusandae? Dolore quia excepturi <br /> ipsa accusantium animi, at corrupti aliquid a recusandae ut mollitia, praesentium unde delectus, aperiam accusamus quam odit nobis eum consequuntur br necessitatibus reprehenderit quas sequi possimus porro? Sint quaerat facilis optio quo quasi libero!</p>
          <PrimaryButton>Get started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
