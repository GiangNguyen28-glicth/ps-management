import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faBarsStaggered,
  faBars,
  faClipboard,
  faArrowRight,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
type Props = {};
const SIDE_BAR_MENU = [
  {
    icon: <FontAwesomeIcon className="" icon={faGlobe as any}></FontAwesomeIcon>,
    title: "Summary",
    link: "",
  },
  {
    icon: <FontAwesomeIcon className="" icon={faBarsStaggered as any}></FontAwesomeIcon>,
    title: "Timeline",
    link: "",
  },
  {
    icon: <FontAwesomeIcon className="" icon={faBars as any}></FontAwesomeIcon>,
    title: "Backlog",
    link: "",
  },
];
export const Sidebar = (props: Props) => {
  const [isOpenPlaining, setIsOpenPlaining] = useState(false);
  return (
    <div className="flex flex-col max-w-3xs w-full px-4 border-r">
      <div className="flex w-full gap-2 py-8">
        <div className="flex items-center bg-blue-400 rounded">
          <FontAwesomeIcon className="px-2 text-white text-xl" icon={faClipboard as any}></FontAwesomeIcon>
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-bold">Project</p>
          <span className="text-xs">Project type</span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center">
          {!isOpenPlaining ? (
            <button className="pr-2 hover:cursor-pointer" onClick={() => setIsOpenPlaining(!isOpenPlaining)}>
              <FontAwesomeIcon
                className="text-xs w-4"
                icon={faArrowRight as any}
              ></FontAwesomeIcon>
            </button>
          ) : (
            <button className="pr-2 hover:cursor-pointer" onClick={() => setIsOpenPlaining(!isOpenPlaining)}>
              <FontAwesomeIcon
                className="text-xs w-4"
                icon={faArrowDown as any}
              ></FontAwesomeIcon>
            </button>
          )}
          <p className="font-bold uppercase text-xs">Plaining</p>
        </div>

        {isOpenPlaining && <div className="flex flex-col pl-4 pr-2 py-2">
          {SIDE_BAR_MENU.map((item, index) => {
            return (
              <div key={index} className="inline-flex items-center gap-2 p-2 hover:cursor-pointer hover:bg-gray-200">
                {item.icon}
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>}
      </div>
    </div>
  );
};
