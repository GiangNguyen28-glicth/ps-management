import { faFile, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment-timezone";

type Props = {
  fileName: string;
  fileSize: number;
  uploadDate: string;
  onDelete: (fileName: string) => void;
};

const AttachmentFile = (props: Props) => {
  console.log("🚀 ~ AttachmentFile ~ AttachmentFile:");

  return (
    <div className='flex flex-col p-2 border rounded hover:bg-gray-200 hover:cursor-pointer'>
      <div className='relative'>
        <FontAwesomeIcon className='w-full h-32 py-8 text-5xl' icon={faFile} />
        <button
          type='button'
          className='absolute top-0 right-0 p-2 hover:cursor-pointer'
          onClick={() => props.onDelete(props.fileName)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <p className='truncate'>{props.fileName}</p>
      <div className='flex justify-between'>
        <p className='text-xs'>{moment(props.uploadDate).format("DD/MMM/YY h:mm A")}</p>
        <p className='text-xs'>{Math.floor(props.fileSize / 1024)} KB</p>
      </div>
    </div>
  );
};

export default AttachmentFile;
