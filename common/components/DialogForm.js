import React from "react";

// Mui
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

// Components
import Typography from "./Typography";

const DialogForm = ({
  open = false,
  formId = "",
  handleClose,
  title,
  handleSubmit,
  onSubmit,
  content,
  actions,
  maxWidth = "sm",
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={maxWidth}
      fullWidth={true}
    >
      <Typography variant="h5" sx={{ px: 3, py: 2 }}>
        {title}
      </Typography>
      <form id={formId} onSubmit={onSubmit}>
        <DialogContent dividers>{content}</DialogContent>
        <DialogActions sx={{ p: 2 }}>{actions}</DialogActions>
      </form>
    </Dialog>
  );
};

export default DialogForm;
