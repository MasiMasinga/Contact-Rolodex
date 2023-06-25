import React from "react";

// Components
import DialogForm from "@/common/components/DialogForm";
import Button from "@/common/components/Button";
import Typography from "@/common/components/Typography";

const DeleteModal = ({ open, loading, onSubmit, handleClose }) => {
  return (
    <DialogForm
      open={open}
      title="Delete Contact"
      onClose={handleClose}
      content={
        <>
          <Typography mb variant="paragraph">
            Are you sure you want to delete this contact?
          </Typography>
        </>
      }
      actions={
        <>
          <Button variant="delete" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="delete" onClick={onSubmit} isLoading={loading}>
            Delete
          </Button>
        </>
      }
    />
  );
};

export default DeleteModal;
