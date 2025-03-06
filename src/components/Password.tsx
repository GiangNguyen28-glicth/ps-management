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
  return (
    <div className={"flex flex-2/1 rounded items-center border focus-within:border-blue-400"}>
      <input
        type={typePassword}
        required={true}
        value={password}
        className="border-none rounded-sm p-2 outline-none w-full"
        placeholder={props.placeHolder}
        onChange={e => setPassword(e.target.value)}
      ></input>
      {isPasswordVisible ? (
        <button className="block mx-auto p-2 hover:cursor-pointer">
          <FontAwesomeIcon className="" onClick={handleEyeIconClick} icon={faEye as any} />
        </button>
      ) : (
        <button className="block mx-auto p-2 hover:cursor-pointer">
          <FontAwesomeIcon className="" onClick={handleEyeIconClick} icon={faEyeSlash as any} />
        </button>
      )}
    </div>
  );
};

export default Password;
