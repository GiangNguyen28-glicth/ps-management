import { useState } from "react";
import { Link } from "react-router-dom";

import Password from "~/components/Password";
import { routes } from "~/common";
import { LogoIcon } from "~/assets/svg/logo";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  return (
    <div className='block p-4 m-auto rounded shadow-md w-lg'>
      <div className='flex flex-col items-center justify-center w-full gap-y-4'>
        <LogoIcon />
        <div className='flex flex-col w-full p-4 gap-y-4'>
          <input
            type='email'
            required={true}
            value={email}
            placeholder='Enter your email'
            className='w-full p-2 border rounded-sm focus:outline-blue-400'
            onChange={e => setEmail(e.target.value)}></input>
          <Password placeHolder='Enter your password' />
          <Password placeHolder='Enter your confirm password' />
          <button className='p-2 text-xl text-white bg-green-400 rounded-sm hover:cursor-pointer'>Register</button>
          <Link to={routes.signIn} className='mx-auto text-blue-500'>
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};
