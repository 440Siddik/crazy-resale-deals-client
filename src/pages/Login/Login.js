import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const { register, handleSubmit } = useForm();
  const { login, googleSignIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const handleGoogleLogin = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        console.log(result);
        const email = result.user.email;
        saveUserAsBuyer(email)
      })
      .catch((err) => console.log(err));

      const saveUserAsBuyer = (email) => {
        fetch(`http://localhost:5000/googleloginbuyer?email=${email}`, {
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
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
