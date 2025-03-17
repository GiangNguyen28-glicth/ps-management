import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBookBookmark, faFileWord, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Paper, Popper, TextField } from "@mui/material";
import { isNil } from "lodash";
import { useRef, useState } from "react";
const TASK_TYPE_ICON = [
  {
    title: "Story",
    icon: <FontAwesomeIcon className='text-base text-green-500' icon={faBookBookmark}></FontAwesomeIcon>
  },
  {
    title: "Document",
    icon: <FontAwesomeIcon className='text-base text-blue-500' icon={faFileWord}></FontAwesomeIcon>
  },
  {
    title: "Task",
    icon: <FontAwesomeIcon className='text-base text-blue-500' icon={faSquareCheck}></FontAwesomeIcon>
  }
];
type Props = {
  isSelect?: boolean;
  isRequired?: boolean;
  field: string;
  id: number;
  isExpandInput?: boolean;
  helpTitle?: string;
  type?: string;
  Icon?: IconProp;
  placeHolder?: string;
  // selectItems: []
};

const ConfigureTaskField = (props: Props) => {
  const [content, setContent] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpenIssueType, setIsOpenIssueType] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const handleSelectType = (content: string) => {
    setContent(content);
    setIsOpenIssueType(false);
    inputRef.current?.focus();
  };
  return (
    <div className={`flex flex-col gap-1 ${!props.isExpandInput ? "w-1/2" : "w-full"}`}>
      <label className='block text-xs font-bold' htmlFor={props.id.toString()}>
        {props.field} {props.isRequired && <span>(*)</span>}
      </label>
      <div className='flex flex-col gap-1'>
        <div ref={selectRef} className='flex flex-col w-full gap-4 border rounded focus-within:border-blue-300'>
          <div className='inline-flex items-center w-full'>
            <TextField
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none"
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none"
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none"
                }
              }}
              size='small'
              placeholder={props.placeHolder}
              id={props.id.toString()}
              value={content}
              type={props.type}
              ref={inputRef}
              required={props.isRequired}
              onChange={e => setContent(e.target.value)}
              className='w-full p-2 outline-none focus:bg-white'
            />
            {props.isSelect && (
              <button
                type='button'
                className='hover:cursor-pointer'
                onClick={() => setIsOpenIssueType(!isOpenIssueType)}>
                {props.Icon && <FontAwesomeIcon className='right-0 p-2' icon={props.Icon} />}
              </button>
            )}
          </div>
          <Popper
            open={isOpenIssueType}
            anchorEl={selectRef.current}
            placement='bottom-start'
            style={{ zIndex: 1300, width: selectRef.current ? selectRef.current.offsetWidth : "auto" }}>
            <Paper className='mt-1 border border-gray-200 rounded shadow-lg'>
              {TASK_TYPE_ICON.map((item, index) => (
                <div
                  className='flex items-center gap-2 p-2 hover:bg-gray-200 hover:cursor-pointer'
                  key={index}
                  onClick={() => handleSelectType(item.title)}>
                  {item.icon}
                  <p className='text-base'>{item.title}</p>
                </div>
              ))}
            </Paper>
          </Popper>
        </div>
        {!isNil(props.helpTitle) && <p className='text-xs'>{props.helpTitle}</p>}
      </div>
    </div>
  );
};

export default ConfigureTaskField;
