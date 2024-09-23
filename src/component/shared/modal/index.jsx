import { forwardRef } from "react";
import { Box, Dialog, Slide } from "@mui/material";

import style from "./index.module.css";
import Form from "../clock-form/Form";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = ({
  open,
  setOpen,
  values,
  edit,
  handleClock,
  title,
  isClosed,
}) => {
  const handleClose = () => {
    setOpen(false);
    isClosed(false);
  };

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box className={style.card}>
          <Form
            handleClock={handleClock}
            edit={edit}
            values={values}
            title={title}
            setOpen={setOpen}
          />
        </Box>
      </Dialog>
    </>
  );
};

export default Modal;
