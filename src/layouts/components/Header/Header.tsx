import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faBell } from "@fortawesome/free-solid-svg-icons";

import { JiraIcon } from "../../../assets/svg/jira";
import { MENU_ITEM_HEADER, psImg } from "../../../common";
import { Dropdown } from "../../../components/Dropdown";
import { Search } from "../Search/Search";
import AccountMenu from "./AccountMenu";
import CreateTask from "../../../components/CreateTask";

export const Header = () => {
  const [isOpenAccountMenu, setIsOpenAccountMenu] = useState(false);
  const [isOpenCreateTask, setIsOpenCreateTask] = useState(false);
  return (
    <div className="container border-b-2 border-gray-200 bg-white px-4">
      <div className="flex justify-between">
        <div className="flex justify-center items-center">
          <div className="p-0.5 hover:cursor-pointer hover:bg-gray-200 rounded">
            <Link to="/">
              <JiraIcon></JiraIcon>
            </Link>
          </div>
          {MENU_ITEM_HEADER.map((item, index) => {
            return (
              <div className="p-2" key={index}>
                <Dropdown text={item.title} children={item.children}></Dropdown>{" "}
              </div>
            );
          })}
          <button
            className="text-white text-center  bg-blue-500 hover:bg-blue-600 hover:cursor-pointer px-2.5 py-1 rounded-md"
            onClick={() => setIsOpenCreateTask(!isOpenCreateTask)}
          >
            Create
          </button>
        </div>
        <div className="flex flex-row-reverse items-center gap-2">
          <div className="relative">
            <img
              src={psImg}
              onClick={() => setIsOpenAccountMenu(!isOpenAccountMenu)}
              className="w-6 h-6 p-0.5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:cursor-pointer hover:bg-gray-200"
            />
            {isOpenAccountMenu && (
              <div className="absolute right-0 mt-3">
                <AccountMenu />
              </div>
            )}
          </div>
          <button className="hover:cursor-pointer hover:bg-gray-200 rounded-full px-2 py-1">
            <FontAwesomeIcon className="" icon={faGear as any}></FontAwesomeIcon>
          </button>

          <button className="hover:cursor-pointer hover:bg-gray-200 rounded-full px-2 py-1">
            <FontAwesomeIcon className="" icon={faBell as any}></FontAwesomeIcon>
          </button>
          <Search></Search>
        </div>
        {isOpenCreateTask && <CreateTask onClose={() => setIsOpenCreateTask(false)}></CreateTask>}
      </div>
    </div>
  );
};
