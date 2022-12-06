import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (data) => {
    const email = data.email;
    const role = data.selectrole;
    console.log(role);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));

    if (role == "Seller") {
      fetch(`http://localhost:5000/seller?email=${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
    if (role == "Buyer") {
      fetch(`http://localhost:5000/buyer?email=${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
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
              <option value="Buyer" defaultChecked>
                Buyer
              </option>
              <option value="Seller">Seller</option>
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
