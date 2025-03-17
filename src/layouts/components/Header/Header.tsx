import { faBell, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { JiraIcon } from "~/assets/svg/jira";
import { MENU_ITEM_HEADER } from "~/common";
import DialogCreateTask from "~/components/DialogCreateTask";
import { Dropdown } from "~/components/Dropdown";
import { Search } from "../Search/Search";
import Account from "./Account";

export const Header = () => {
  return (
    <header className='px-4 bg-white border-b-2 border-gray-200'>
      <div className='flex justify-between'>
        <div className='flex items-center justify-center'>
          <div className='p-0.5 hover:cursor-pointer hover:bg-gray-200 rounded'>
            <Link to='/'>
              <JiraIcon />
            </Link>
          </div>
          {MENU_ITEM_HEADER.map(item => {
            return (
              <div className='p-2' key={item.title}>
                <Dropdown text={item.title} children={item.children} />
              </div>
            );
          })}
          <DialogCreateTask></DialogCreateTask>
          {/* <button
            className='text-white text-center  bg-blue-500 hover:bg-blue-600 hover:cursor-pointer px-2.5 py-1 rounded-md'
            onClick={() => setIsOpenCreateTask(!isOpenCreateTask)}>
            Create
          </button> */}
        </div>
        <div className='flex flex-row-reverse items-center gap-2'>
          <Account />
          <button className='px-2 py-1 rounded-full hover:cursor-pointer hover:bg-gray-200'>
            <FontAwesomeIcon className='' icon={faGear} />
          </button>

          <button className='px-2 py-1 rounded-full hover:cursor-pointer hover:bg-gray-200'>
            <FontAwesomeIcon className='' icon={faBell} />
          </button>
          <Search />
        </div>
      </div>
    </header>
  );
};
