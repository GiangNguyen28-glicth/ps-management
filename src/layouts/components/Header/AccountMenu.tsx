import { Link } from "react-router-dom";
import { psImg } from "../../../common";

const JIRA_MENU = [
  {
    text: "Profile",
    to: "/sign-in"
  },
  {
    text: "Personal settings",
    to: "/"
  },
  {
    text: "Notifications",
    to: "/"
  }
];
export const AccountMenu = () => {
  return (
    <div className='flex flex-col overflow-auto border-gray-200 rounded shadow-2xl min-w-60 border-3'>
      <div className='border-b border-gray-300'>
        <p className='p-2.5 text-xs font-bold text-gray-500'>Account</p>
        <div className='flex items-center px-4 flex-1/2'>
          <img className='w-6 h-6 p-0.5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500' src={psImg}></img>
          <div className='flex flex-col p-2'>
            <p>Giang</p>
            <p className='text-xs'>giangnguyen3246@gmail.com</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col py-2 border-b border-gray-300'>
        <p className='px-4 py-2 text-xs font-bold text-gray-500'>Jira</p>
        {JIRA_MENU.map((item, index) => {
          return (
            <Link to={item.to} key={index} className='px-4 py-2 hover:cursor-pointer hover:bg-gray-200'>
              {item.text}
            </Link>
          );
        })}
      </div>
      <div className='py-2'>
        <button className='w-full px-4 py-2 text-left hover:cursor-pointer hover:bg-gray-200'>Logout</button>
      </div>
    </div>
  );
};

export default AccountMenu;
