import React, { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type Props = {
  placeHolder: string;
};

const Password = (props: Props) => {
  const [typePassword, setTypePassword] = useState("password");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleEyeIconClick = () => {
    setTypePassword(typePassword === "text" ? "password" : "text");
    setIsPasswordVisible(!isPasswordVisible);
  };
  const iconEye = isPasswordVisible ? faEyeSlash : faEye;
  return (
    <div className={"flex flex-2/1 rounded items-center border focus-within:border-blue-400"}>
      <input
        type={typePassword}
        required={true}
        value={password}
        className='w-full p-2 border-none rounded-sm outline-none'
        placeholder={props.placeHolder}
        onChange={e => setPassword(e.target.value)}
      />

      <button className='block p-2 mx-auto hover:cursor-pointer' onClick={handleEyeIconClick}>
        <FontAwesomeIcon className='' icon={iconEye} />
      </button>
    </div>
  );
};

export default Password;
