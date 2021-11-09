import React from "react";

// Assets
import { ReactComponent as AtSign } from "./../../../assets/accounts/AtSign.svg";

const ResetPassword = () => {
  return (
    <div className="h-screen">
      <div className="sm:mx-auto py-0  px-8 sm:w-2/4  bg-white ">
        <div className=" sm:mx-28 pt-10 ">
          <h3 className="text-center font-bold text-4xl mb-5 mt-20 sm:mt-28">
            Reset your password
          </h3>
          <p className="mb-6">
            Enter your email address below and we’ll send an email with a link
            to update your password.
          </p>
          <form action="" method="post">
            <div className=" mb-6">
              <p className="mb-2.5 ml-3">Email</p>

              {/* Email */}

              <label class="relative text-gray-400 focus-within:text-gray-600 block">
                <AtSign className="absolute w-6 h-6 top-3  left-4" />

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  autoComplete
                  class="form-input border border-gray-400 rounded py-3 px-4 w-full bg-white placeholder-gray-400 text-gray-500 appearance-none block pl-14 focus:outline-none"
                />
              </label>
            </div>

            <div className="">
              <button
                type="submit"
                className="py-4 mb-14  bg-yellow-500 w-full font-bold uppercase"
              >
                RESET PASSOWRD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
