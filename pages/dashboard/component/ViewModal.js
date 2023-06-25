import React, { useContext } from "react";

//Mui
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

// Context
import { DashboardContext } from "@/pages/dashboard/context/DashboardContext"

// Mui Icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Components
import DialogForm from "@/common/components/DialogForm";
import Button from "@/common/components/Button";
import Typography from "@/common/components/Typography";
import InputField from "@/common/components/InputField";

const ViewModal = ({ open, handleClose }) => {
  const { handleGetContact } = useContext(DashboardContext);

  return (
    <DialogForm
      open={open}
      title="Contact Details"
      onClose={handleClose}
      content={
        <Stack spacing={2}>
          <IconButton disableFocusRipple disableRipple>
            <AccountCircleIcon color="grey" sx={{ fontSize: "120px" }} />
          </IconButton>
          <InputField
            label="Name"
            disabled
            defaultValue={"Masibonge Masinga"}
          />
          <InputField
            label="Email"
            disabled
            defaultValue={"masingamasibonge@gmail.com"}
          />
          <InputField label="Contact Type" disabled defaultValue={"Friend"} />
          <InputField
            label="Phone Number"
            disabled
            defaultValue={"072 472 1654"}
          />
        </Stack>
      }
      actions={
        <>
          <Button variant="delete" onClick={handleClose}>
            Close
          </Button>
        </>
      }
    />
  );
};

export default ViewModal;
