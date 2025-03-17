import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const handleRemoveClick = () => {
    setSearchValue("");
    searchRef.current?.focus();
  };
  return (
    <div className='flex justify-center border rounded opacity-60 focus-within:border-blue-500'>
      <FontAwesomeIcon className='p-2 rounded-full hover:cursor-pointer hover:bg-gray-200 opacity-60' icon={faSearch} />
      <input
        value={searchValue}
        ref={searchRef}
        className='outline-none'
        placeholder='Search'
        onChange={e => setSearchValue(e.target.value)}
      />
      <button className='px-2 py-1 rounded-full hover:cursor-pointer hover:bg-gray-200'>
        <FontAwesomeIcon className='' onClick={handleRemoveClick} icon={faXmark} />
      </button>
    </div>
  );
};
