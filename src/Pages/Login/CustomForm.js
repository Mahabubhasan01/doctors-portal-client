import React from "react";
import { useForm } from "react-hook-form";

const CustomForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => {

  }
  return (
    <div >
      <div className=" lg:shadow-kg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder=""
        
            readOnly
            className="my-3"
            {...register("email", { required: true })}
          />
          <p>Product Name</p>

          <input
            placeholder="Enter your product name"
            className="my-3"
            {...register("name", { required: true })}
          />
          <p>Product Info</p>
          <input
            placeholder="Enter product info"
            className="mb-3 p-5"
            {...register("info")}
          />
          <p>Prices</p>

          <input
            placeholder="Price"
            className="mb-3"
            {...register("price", { required: true })}
          />
          <p>Quantity</p>
          <input
            placeholder="quantity"
            className="mb-3"
            {...register("quantity", { required: true })}
          />
          <p>Image url</p>

          <input
            placeholder="photo url"
            className="mb-3"
            {...register("img", { required: true })}
          />
          <p>Supplier</p>

          <input
            placeholder="supplier"
            className="mb-3"
            {...register("supplier", { required: true })}
          />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default CustomForm;
