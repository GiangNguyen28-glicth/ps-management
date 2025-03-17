import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faBarsStaggered,
  faBars,
  faClipboard,
  faArrowRight,
  faArrowDown
} from "@fortawesome/free-solid-svg-icons";
const SIDE_BAR_MENU = [
  {
    icon: <FontAwesomeIcon className='' icon={faGlobe} />,
    title: "Summary",
    to: ""
  },
  {
    icon: <FontAwesomeIcon className='' icon={faBarsStaggered} />,
    title: "Timeline",
    to: ""
  },
  {
    icon: <FontAwesomeIcon className='' icon={faBars} />,
    title: "Backlog",
    to: ""
  }
];
export const Sidebar = () => {
  const [isOpenPlaining, setIsOpenPlaining] = useState(false);
  const toggleIcon = isOpenPlaining ? faArrowDown : faArrowRight;
  return (
    <aside className='flex flex-col px-4 border-r w-[20%]'>
      <div className='flex w-full gap-2 py-8'>
        <div className='flex items-center bg-blue-400 rounded'>
          <FontAwesomeIcon className='px-2 text-xl text-white' icon={faClipboard} />
        </div>
        <div className='flex flex-col justify-between'>
          <p className='font-bold'>Project</p>
          <p className='text-xs'>Project type</p>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex items-center'>
          <button className='pr-2 hover:cursor-pointer' onClick={() => setIsOpenPlaining(!isOpenPlaining)}>
            <FontAwesomeIcon className='w-4 text-xs' icon={toggleIcon} />
          </button>
          <p className='text-xs font-bold uppercase'>Plaining</p>
        </div>
        {isOpenPlaining && (
          <div className='flex flex-col py-2 pl-4 pr-2'>
            {SIDE_BAR_MENU.map((item, index) => {
              return (
                <div key={index} className='inline-flex items-center gap-2 p-2 hover:cursor-pointer hover:bg-gray-200'>
                  {item.icon}
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
};
