import React from "react";
import { Link } from "react-router-dom";

//Assets
import Logo from "./../../../assets/Logo.svg";
import { ReactComponent as Lock } from "./../../../assets/accounts/lock.svg";
import { ReactComponent as User } from "./../../../assets/accounts/user.svg";
import { ReactComponent as MapPin } from "./../../../assets/accounts/map-pin.svg";
import { ReactComponent as Clock } from "./../../../assets/accounts/clock.svg";
import { ReactComponent as Smartphone } from "./../../../assets/accounts/smartphone.svg";
import { ReactComponent as AtSign } from "./../../../assets/accounts/AtSign.svg";
import { ReactComponent as Player } from "./../../../assets/accounts/Player.svg";

const SignUpCandidates = () => {
  return (
    <div className="flex h-full flex-row">
      <div className=" flex-row h-auto w-1/2 bg-candidate hidden sm:flex justify-between">
        <div className="bg-overlay">
          <div className=" ml-12">
            <Link to="/">
              <img src={Logo} className="mb-96 mt-10" alt="" />
            </Link>
            <div className="text-white mb-10">
              <Player className="mb-4" />
              <h3 className="font-bold text-2xl">
                We get you the best job offers
              </h3>
              <p>
                Join thousands of accountants who’ve found their <br /> dream
                job using Recruit4Africa.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:w-1/2 w-full mx-4 sm:mx-0 sm:ml-24">
        <div className="sm:mr-12">
          <h6 className="mb-9 float-right mt-10">
            Already have an account? {"   "}
            <Link to="/login">
              <span className="text-yellow-400 font-bold">Log In</span>
            </Link>
          </h6>
          <h2 className="font-bold pt-24 text-4xl mb-6">Talent Sign up</h2>
        </div>
        <form action="" className="sm:mr-4 mb-28">
          <div className="sm:mr-40 mb-6">
            {/* Name */}
            <p className="mb-2.5">Your full name</p>
            <label class="relative text-gray-400 focus-within:text-gray-600 block">
              <User className="absolute w-6 h-6 top-3  left-4" />

              <input
                type="text"
                name="name"
                required
                id="name"
                placeholder="Your full name"
                class="form-input border border-gray-400 rounded py-3 px-4 w-full bg-white placeholder-gray-400 text-gray-500 appearance-none block pl-14 focus:outline-none"
              />
            </label>
          </div>
          <div className="sm:mr-40 mb-6">
            <p className="mb-2.5">Email</p>
            {/* Email */}
            <label class="relative text-gray-400 focus-within:text-gray-600 block">
              <AtSign className="absolute w-6 h-6 top-3  left-4" />

              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
                class="form-input border border-gray-400 rounded py-3 px-4 w-full bg-white placeholder-gray-400 text-gray-500 appearance-none block pl-14 focus:outline-none"
              />
            </label>
          </div>
          <div className="sm:mr-40 mb-6">
            <p className="mb-2.5">Phone Number</p>
            {/* Phone Number */}
            <label class="relative text-gray-400 focus-within:text-gray-600 block">
              <Smartphone className="absolute w-6 h-6 top-3  left-4" />

              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="+256 704 123 093"
                class="form-input border border-gray-400 rounded py-3 px-4 w-full bg-white placeholder-gray-400 text-gray-500 appearance-none block pl-14 focus:outline-none"
              />
            </label>
          </div>
          <div className="sm:mr-40 mb-6">
            <p className="mb-2.5">Password</p>
            {/* Password */}
            <label class="relative text-gray-400 focus-within:text-gray-600 block">
              <Lock className="absolute w-6 h-6 top-3  left-4" />
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="Password"
                class="form-input border border-gray-400 rounded py-3 px-4 w-full bg-white placeholder-gray-400 text-gray-500 appearance-none block pl-14 focus:outline-none"
              />
            </label>
          </div>
          <div className="sm:mr-40 mb-6">
            <div className="flex flex-col  sm:flex-row ">
              <div className="sm:mr-6">
                <p className="mb-2.5">Your location</p>
                {/* Location */}
                <label class="relative text-gray-400 focus-within:text-gray-600 block">
                  <MapPin className="absolute w-6 h-6 top-3  left-4" />
                  <input
                    type="text"
                    name="location"
                    id="location"
                    required
                    placeholder="Your location"
                    class="form-input border border-gray-400 rounded py-3 px-4 w-full bg-white placeholder-gray-400 text-gray-500 appearance-none block pl-14 focus:outline-none"
                  />
                </label>
              </div>
              <div>
                <p className="mb-2.5">Your time zone</p>
                {/* Time zone */}
                <label class="relative text-gray-400 focus-within:text-gray-600 block">
                  <Clock className="absolute w-6 h-6 top-3  left-4" />
                  <select
                    name="timezone"
                    id="timezone"
                    required
                    class="form-input border  border-gray-400 rounded py-3 px-4 w-full mr-14 bg-white placeholder-gray-400 text-gray-500 appearance-none block pl-14 focus:outline-none"
                  >
                    <option defaultValue>Timezone</option>
                    <option value="" className="pr-8">
                      Value One
                    </option>
                    <option value="" className="pr-8">
                      Value Two
                    </option>
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-row mb-7">
            <input
              type="checkbox"
              checked
              required
              className="mt-1"
              name="agree"
              id="agree"
            />
            <p className="ml-4 text-xs">
              By signing up you agree to Recruit4africa's Terms of <br />
              Service and Privacy Policy
            </p>
          </div>
          <div className="sm:mr-40">
            <Link to="/profile-candidate">
              <button className="py-4  bg-yellow-500 w-full font-bold uppercase">
                Get Started
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpCandidates;
