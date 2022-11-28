import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const handleSignup = (data) => {
    console.log(data);
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 rounded border border-fuchsia-300">
        <h3 className="font-semibold text-4xl text-center">Sign Up</h3>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control w-full my-4">
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full my-4">
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full my-4">
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <div className="flex my-2">
              <div className="flex mr-6">
                <p className="mr-2">Buyer</p>
                <input
                  defaultChecked
                  type="radio"
                  name="radio-5"
                  className="radio radio-success"
                />
              </div>
              <div className="flex">
                <p className="mr-2">Seller</p>
                <input
                  type="radio"
                  name="radio-5"
                  className="radio radio-success"
                />
              </div>
            </div>

            <input
              className="btn btn-secondary w-full my-3"
              value="Sign up"
              type="submit"
            />
          </div>
        </form>
        <p className="text-center my-4">
          Already have an account?{" "}
          <Link className="underline text-green-600 font-medium" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
