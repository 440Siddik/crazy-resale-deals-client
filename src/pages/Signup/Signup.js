import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast("User Created Successfully");
        const userInfo = {
          displayName: data.name
        }
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.selectrole);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const saveUser = (name, email) => {
    const user = {name, email};
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      });
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
            <select
              {...register("selectrole")}
              className="select select-bordered w-full"
            >
              <option>Buyer</option>
              <option>Seller</option>
            </select>
          </div>
          <div>
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
