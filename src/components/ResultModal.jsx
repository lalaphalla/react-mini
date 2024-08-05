import { Modal, ModalDialog, Typography } from "@mui/joy";
import { forwardRef, useState, useRef } from "react";

// use forward ref for forward ref out parent component
const ResultModal = forwardRef(function ResultModal(
  { title, remainingTime, open, handleShow,reset },
  ref
) {
  // console.log(ref.current)
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedRemaining = (remainingTime / 1000).toFixed(2);
  function handleClick() {
    console.log(dialog.current);
  }
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={handleShow}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      ref={dialog}
    >
      <ModalDialog
        aria-labelledby="nested-modal-title"
        aria-describedby="nested-modal-description"
        sx={(theme) => ({
          [theme.breakpoints.only("xs")]: {
            transform: "none",
            maxWidth: "unset",
          },
        })}
      >
        <Typography variant="h3" onClick={handleClick}>
          {userLost && "YOU LOST" }
          <form action="" onSubmit={reset}>
          <p>You stopped timer with {formattedRemaining} second left</p>
          <button>Close</button>
          </form>
        </Typography>
      </ModalDialog>
    </Modal>
  );
});
export default ResultModal;
