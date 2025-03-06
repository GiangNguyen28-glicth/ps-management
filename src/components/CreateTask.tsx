import { faGear, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import ConfigureField from "./ConfigureField";

type Props = {
  onClose: () => void;
};

const CreateTask = (props: Props) => {
  const createTaskRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (createTaskRef.current && !createTaskRef.current.contains(event.target as Node)) {
        props.onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      className="fixed opacity-60 bg-gray-500 w-full h-full top-0 left-0 z-10 flex items-center justify-center"
    >
      <div ref={createTaskRef} className="w-xl h-xl border border-gray-200 shadow-md bg-white rounded">
        <div className="flex items-center justify-between p-2 border-b-2 border-gray-200">
          <h1 className="font-bold">Create Issue</h1>
          <div className="flex items-center gap-2">
            <button className="flex items-center p-2 gap-2 hover:bg-gray-200 rounded hover:cursor-pointer">
              <FontAwesomeIcon className="" icon={faGear as any}></FontAwesomeIcon>
              <p>Configure Task</p>
            </button>
            <button
              className="w-8 h-8 hover:cursor-pointer hover:bg-gray-200 rounded-full"
              onClick={() => {
                props.onClose();
              }}
            >
              <FontAwesomeIcon className="" icon={faXmark as any}></FontAwesomeIcon>
            </button>
          </div>
        </div>
        <div className="p-2 text-xs border-b-2 border-gray-200">
          <p>All fields marked with an asterisk (*) are required</p>
          <div className="flex flex-col gap-4 mt-3">
            <ConfigureField id={1} isRequired={true} field="Project" isSelect={true}></ConfigureField>
            <ConfigureField id={2} isRequired={true} field="Issue Type" isSelect={true}></ConfigureField>
          </div>
        </div>

        <div className="p-2 text-xs border-b-2 border-gray-200">
          <div className="flex flex-col gap-4 mt-3">
            <ConfigureField id={3} isRequired={true} field="Summary"></ConfigureField>
            <ConfigureField id={4} isRequired={true} field="Components" isSelect={true}></ConfigureField>
          </div>
        </div>
        <div className="p-2 text-xs border-b-2 border-gray-200">
          <div className="flex flex-col gap-4 mt-3">
            <ConfigureField id={3} isRequired={true} field="Summary"></ConfigureField>
            <ConfigureField id={4} isRequired={true} field="Components" isSelect={true}></ConfigureField>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
