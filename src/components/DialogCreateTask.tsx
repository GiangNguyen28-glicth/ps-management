import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, Fragment, useState } from "react";

import ConfigureTaskField from "./ConfigureTaskField";
import Attachment from "./Attachment";

const DialogCreateTask = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log("close");
    setOpen(false);
  };

  return (
    <Fragment>
      <Button variant='outlined' onClick={handleClickOpen}>
        Create
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: "form",
            sx: { minWidth: "50%" },
            onSubmit: (event: FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              console.log("submit");
              handleClose();
            }
          }
        }}>
        <DialogTitle>Create Issue</DialogTitle>
        <DialogContent>
          <div className='py-2 border-b-2 border-b-gray-300'>
            <p>Required fields are marked with an asterisk *</p>
            <div className='flex flex-col gap-4 mt-3'>
              <ConfigureTaskField id={1} isRequired field='Project' isSelect Icon={faCircleArrowDown} />
              <ConfigureTaskField id={2} isRequired field='Issue Type' isSelect Icon={faCircleArrowDown} />
            </div>
          </div>
          <div className='flex flex-col gap-4 mt-2'>
            <ConfigureTaskField id={3} isRequired field='Summary' isExpandInput />
            <ConfigureTaskField id={4} field='Status' isSelect Icon={faCircleArrowDown} />
            <ConfigureTaskField id={5} isRequired field='Due date' type='date' />
            <ConfigureTaskField id={6} field='Labels' isSelect Icon={faCircleArrowDown} />
            <ConfigureTaskField
              id={7}
              field='Sprint'
              isSelect
              Icon={faCircleArrowDown}
              helpTitle='Jira Software sprint field'
            />
            <Attachment />
          </div>
        </DialogContent>
        <DialogActions className='border-t-2 border-gray-300'>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit'>Create</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default DialogCreateTask;
