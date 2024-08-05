import { Modal, Typography } from "@mui/joy";

export default function ResultModal({ title, targetTime, open}) {
    
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => setOpen(false)}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Typography variant="h3">YOU LOST</Typography>
    </Modal>
  );
}
