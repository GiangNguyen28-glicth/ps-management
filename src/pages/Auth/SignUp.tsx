import { useState } from "react";

import { LogoIcon } from "../../assets/svg/logo";
import Password from "../../components/Password";
import { Link } from "react-router-dom";
import { routes } from "../../common";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="block m-auto w-lg shadow-md p-4 rounded">
      <div className="flex flex-col justify-center items-center gap-y-4 w-full">
        <LogoIcon></LogoIcon>
        <div className="flex flex-col gap-y-4 w-full p-4">
          <input
            type="email"
            required={true}
            value={email}
            placeholder="Enter your email"
            className="border rounded-sm p-2 focus:outline-blue-400 w-full"
            onChange={e => setEmail(e.target.value)}
          ></input>
          <Password placeHolder= "Enter your password"></Password>
          <Password placeHolder="Enter your confirm password"></Password>
          <button className="bg-green-400 text-white rounded-sm hover:cursor-pointer p-2 text-xl">Register</button>
          <Link to={routes.signIn} className="text-blue-500 mx-auto">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};
