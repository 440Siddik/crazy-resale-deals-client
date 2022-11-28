import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
const { register, handleSubmit } = useForm();
const [data, setData] = useState("");
const handleLogin = (data) => {
console.log(data);
}
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 rounded border border-fuchsia-300">
        <h3 className="font-semibold text-4xl text-center">Login</h3>
        <form onSubmit={handleSubmit(handleLogin)}>
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
          <input
            className="btn btn-secondary w-full"
            value="Login"
            type="submit"
          />
        </form>
        <p className="text-center my-4">
          New to Crazy Resale Deals?{" "}
          <Link className="underline text-green-600 font-medium" to="/signup">
            Signup
          </Link>
        </p>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
        </div>
        <button className="btn btn-outline w-full">Login With Google</button>
      </div>
    </div>
  );
};

export default Login;