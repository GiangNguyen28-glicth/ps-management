import { faBookBookmark, faCircleArrowDown, faFileWord, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

const TASK_TYPE_ICON = [
  {
    title: "Story",
    icon: <FontAwesomeIcon className="text-green-500 text-base" icon={faBookBookmark as any}></FontAwesomeIcon>,
  },
  {
    title: "Document",
    icon: <FontAwesomeIcon className="text-blue-500 text-base" icon={faFileWord as any}></FontAwesomeIcon>,
  },
  {
    title: "Task",
    icon: <FontAwesomeIcon className="text-blue-500 text-base" icon={faSquareCheck as any}></FontAwesomeIcon>,
  },
];

type Props = {
  isSelect?: boolean;
  isRequired?: boolean;
  field: string;
  id: number;
  // selectItems: []
};

export const ConfigureField = (props: Props) => {
  const [isOpenIssueType, setIsOpenIssueType] = useState(false);
  const [content, setContent] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const handleSelectType = (content: string) => {
    setContent(content);
    setIsOpenIssueType(!isOpenIssueType);
    inputRef.current?.focus();
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpenIssueType(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex gap-4 items-center">
      <div className="w-32">
        <label className="font-bold text-right block" htmlFor={props.id.toString()}>
          {props.field} {props.isRequired && <span>(*)</span>}
        </label>
      </div>
      <div
        ref={selectRef}
        className=" flex flex-col gap-4 bg-gray-200 relative focus-within:bg-white focus-within:border-blue-300 focus-within border rounded"
      >
        <div className="inline-flex items-center w-2xs">
          <input
            id={props.id.toString()}
            value={content}
            ref={inputRef}
            required={props.isRequired}
            onChange={e => {
              setContent(e.target.value);
            }}
            className="p-2 outline-none w-full focus:bg-white"
          ></input>
          {props.isSelect && (
            <button className="hover:cursor-pointer">
              <FontAwesomeIcon
                onClick={() => {
                  setIsOpenIssueType(!isOpenIssueType);
                }}
                className="right-0 p-2"
                icon={faCircleArrowDown as any}
              ></FontAwesomeIcon>
            </button>
          )}
        </div>
        <div
          className={`flex flex-col absolute w-full mt-9 z-10 bg-white ${
            isOpenIssueType && "shadow-lg border rounded border-gray-200"
          }`}
        >
          {isOpenIssueType &&
            TASK_TYPE_ICON.map((item, index) => {
              return (
                <div
                  className="flex gap-2 p-2 items-center hover:bg-gray-200 hover:cursor-pointer"
                  key={index}
                  onClick={() => handleSelectType(item.title)}
                >
                  {item.icon}
                  <p className="text-base">{item.title}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ConfigureField;
