import React from "react";
import { Link } from "react-router-dom";

// Assets
import { ReactComponent as Logo } from "./../../../assets/Logo.svg";
import { ReactComponent as LinkedIn } from "./../../../assets/accounts/LinkedIn.svg";
import { ReactComponent as AtSign } from "./../../../assets/accounts/AtSign.svg";
import { ReactComponent as Lock } from "./../../../assets/accounts/lock.svg";

const SignInCandidates = () => {
  return (
    <div className="mx-auto mt-10 w-2/4">
      <div className="flex flex-row justify-around mb-14">
        <Logo />
        <p className="">
          Don't have an account?{" "}
          <Link to="/candidate-signup">
            <span className="text-yellow-500 font-bold">Sign up here </span>
          </Link>{" "}
        </p>
      </div>

      <div className=" sm:mx-28">
        <h3 className="text-center font-bold text-4xl mb-5">Sign in</h3>

        <button className="w-full py-5 justify-center flex bg-indigo-600 px-28 mb-9">
          <LinkedIn className="mr-8" />
          <span className="text-white font-bold text-sm">
            Sign in with Linkedin
          </span>
        </button>

        <div className="flex flex-row justify-between items-center mb-4">
          <hr className=" bg-gray-400 h-0.5 w-1/4" />
          <p className=" text-sm">or sign in with your email</p>
          <hr className=" bg-gray-400 h-0.5 w-1/4" />
        </div>
        <form action="" method="post">
          <div className=" mb-6">
            <p className="mb-2.5 ml-3">Email</p>
            {/* Email */}
            <label class="relative text-gray-400 focus-within:text-gray-600 block">
              <AtSign className="absolute w-6 h-6 top-2.5  left-4" />

              <input
                type="email"
                name="email"
                required
                id="email"
                placeholder="Email"
                autoComplete
                class="form-input border border-gray-400 rounded py-3 px-4 w-full bg-white placeholder-gray-400 text-gray-500 appearance-none block pl-14 focus:outline-none"
              />
            </label>
          </div>
          <div className=" mb-6">
            <p className="mb-2.5 ml-3">Password</p>
            {/* Password */}
            <label class="relative text-gray-400 focus-within:text-gray-600 block">
              <Lock className="absolute w-6 h-6 top-2.5  left-4" />
              <input
                type="password"
                name="password"
                required
                id="password"
                placeholder="Password"
                class="form-input border border-gray-400 rounded py-3 px-4 w-full bg-white placeholder-gray-400 text-gray-500 appearance-none block pl-14 focus:outline-none"
              />
            </label>
          </div>

          <Link to="/reset-password">
            <span className="float-right mb-2.5 text-yellow-500 font-bold">
              Forgot password?
            </span>
          </Link>
          <div className="">
            <button
              type="submit"
              className="py-4 mb-14  bg-yellow-500 w-full font-bold uppercase"
            >
              Sign In{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInCandidates;
