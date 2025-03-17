import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useRef, useState } from "react";
import AttachmentFile from "./AttachmentFile";
export interface FileInfo {
  name: string;
  size: number;
  uploadDate: string;
}

const Attachment = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<FileInfo[]>([]);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first file
    if (file) {
      files.push({ name: file.name, size: file.size, uploadDate: new Date().toISOString() });
      setFiles([...files]); // Save file info
    }
  };
  const handleDelete = (fileName: string) => {
    setFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
  };
  return (
    <Fragment>
      <div className='flex items-center justify-center gap-2 p-2 border border-dashed rounded'>
        <FontAwesomeIcon className='text-gray-500' icon={faCloudArrowUp} />
        <p>Drop files to attach or</p>
        <button
          type='button'
          id='attachment-browse-button'
          onClick={handleClick}
          className='px-2 py-1 font-bold bg-gray-200 rounded hover:cursor-pointer'>
          Browser
        </button>
        <input
          ref={fileInputRef}
          className='hidden'
          aria-labelledby='attachment-browse-button'
          aria-hidden={true}
          type='file'
          onChange={handleFileChange}
        />
      </div>
      <div className='flex flex-wrap w-full mt-3 justify-start gap-[3.3%] gap-y-4'>
        {files.length > 0 &&
          files.map(file => (
            <div key={file.name} className='w-[31%] overflow-hidden text-ellipsis'>
              <AttachmentFile
                onDelete={handleDelete}
                fileName={file.name}
                fileSize={file.size}
                uploadDate={file.uploadDate}
              />
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default Attachment;
