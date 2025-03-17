import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "~/assets/svg/logo";
import { routes } from "~/common";
import Password from "~/components/Password";


export const SignIn = () => {
  const [email, setEmail] = useState("");
  return (
    <div className='block p-4 m-auto border-2 border-gray-200 rounded shadow-md w-lg'>
      <div className='flex flex-col items-center justify-center w-full gap-y-4'>
        <LogoIcon />
        <div className='flex flex-col w-full p-4 border-b gap-y-4'>
          <input
            type='email'
            required={true}
            value={email}
            placeholder='Enter your email'
            className='w-full p-2 border rounded-sm focus:outline-blue-400'
            onChange={e => setEmail(e.target.value)}></input>
          <Password placeHolder='Enter your password' />
          <button className='p-2 text-xl text-white bg-blue-400 rounded-sm hover:cursor-pointer'>Login</button>
          <Link to='' className='mx-auto text-blue-500'>
            Forgotten password?
          </Link>
        </div>
      </div>
      <Link
        to={routes.signUp}
        className='block max-w-sm p-2 mx-auto mt-4 text-xl text-center text-white bg-green-400 rounded hover:cursor-pointer'>
        Create new account
      </Link>
    </div>
  );
};
