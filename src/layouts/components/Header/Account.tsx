import { useState } from "react";
import { psImg } from "../../../common";
import AccountMenu from "./AccountMenu";


const Account = () => {
  const [isOpenAccountMenu, setIsOpenAccountMenu] = useState(false);

  return (
    <div className='relative'>
      <img
        src={psImg}
        onClick={() => setIsOpenAccountMenu(!isOpenAccountMenu)}
        className='w-6 h-6 p-0.5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 hover:cursor-pointer hover:bg-gray-200'
      />
      {isOpenAccountMenu && (
        <div className='absolute right-0 mt-3'>
          <AccountMenu />
        </div>
      )}
    </div>
  );
};

export default Account;
