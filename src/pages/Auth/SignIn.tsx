import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoIcon } from "../../assets/svg/logo";
import Password from "../../components/Password";
import { routes } from "../../common";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  return (
    <div className="block m-auto w-lg shadow-md p-4 border-gray-200 border-2 rounded">
      <div className="flex flex-col justify-center items-center gap-y-4 w-full">
        <LogoIcon></LogoIcon>
        <div className="flex flex-col gap-y-4 w-full border-b p-4">
          <input
            type="email"
            required={true}
            value={email}
            placeholder="Enter your email"
            className="border rounded-sm p-2 focus:outline-blue-400 w-full"
            onChange={e => setEmail(e.target.value)}
          ></input>
          <Password placeHolder="Enter your password"></Password>
          <button className="bg-blue-400 text-white rounded-sm hover:cursor-pointer p-2 text-xl">Login</button>
          <a href="#" className="text-blue-500 mx-auto">
            Forgotten password?
          </a>
        </div>
      </div>
      <button
        className="bg-green-400 block mx-auto p-2 max-w-sm rounded text-white text-xl mt-4 hover:cursor-pointer"
        onClick={() => {
          navigate(routes.signUp);
        }}
      >
        Create new account
      </button>
    </div>
  );
};
