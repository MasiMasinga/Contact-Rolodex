import React, { useState, useContext } from "react";

//Mui
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";

// Context
import { DashboardContext } from "@/pages/dashboard/context/DashboardContext"

// Mui Icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// React Hook Form
import { useForm, Controller } from "react-hook-form";

// Components
import ContentBlock from "@/common/components/ContentBlock";
import InputField from "@/common/components/InputField";
import Select from "@/common/components/Select";
import Button from "@/common/components/Button";
import Typography from "@/common/components/Typography";
import DialogForm from "@/common/components/DialogForm";

// Utils
import { ValidationMessages } from "../../../common/utils/constants";
import { isValidEmail } from "@/common/utils/validations";

const CreateContact = () => {
  const { loading, handleCreateContact } = useContext(DashboardContext);
  const [openModal, setOpenModal] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      avatar: "",
      name: "",
      email_address: "",
      contact_type: "",
      phone_number: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    handleCreateContact(data);
    setOpenModal(false)
  });

  return (
    <>
      <ContentBlock sx={{ p: 2, height: "150px" }}>
        <Typography mb variant="h6">
          Create Contact
        </Typography>
        <Typography mb variant="h6" sx={{ fontWeight: 400 }}>
          Add colleagues/individuals to your contact list
        </Typography>
        <Button onClick={() => setOpenModal(true)}>Add Contact</Button>
      </ContentBlock>
      <DialogForm
        open={openModal}
        title="Add Contact"
        onClose={() => setOpenModal(false)}
        content={
          <Stack spacing={2} sx={{ p: 2 }}>
            <Stack alignItems="center">
              <AccountCircleIcon color="grey" sx={{ fontSize: "120px" }} />
            </Stack>
            <Controller
              name="name"
              control={control}
              rules={{
                required: ValidationMessages.required,
              }}
              render={({ field, fieldState: { error } }) => (
                <InputField label="Name" error={error} {...field} />
              )}
            />
            <Controller
              name="email_address"
              control={control}
              rules={{
                required: ValidationMessages.required,
                validate: (value) =>
                  isValidEmail(value) || ValidationMessages.inValidEmail,
              }}
              render={({ field, fieldState: { error } }) => (
                <InputField label="Email" error={error} {...field} />
              )}
            />
            <Controller
              name="contact_type"
              control={control}
              rules={{
                required: ValidationMessages.required,
              }}
              render={({ field, fieldState: { error } }) => (
                <Select label="Contact Type" error={error} {...field}>
                  <MenuItem value="Business">Business</MenuItem>
                  <MenuItem value="Personal">Personal</MenuItem>
                  <MenuItem value="Family">Family</MenuItem>
                  <MenuItem value="Friend">Friend</MenuItem>
                </Select>
              )}
            />
            <Controller
              name="phone_number"
              control={control}
              rules={{
                required: ValidationMessages.required,
                minLength: 10,
                maxLength: 10,
              }}
              render={({ field, fieldState: { error } }) => (
                <InputField label="Phone Number" error={error} {...field} />
              )}
            />
          </Stack>
        }
        actions={
          <>
            <Button variant="delete" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
            <Button type="submit" onClick={onSubmit}>
              Save
            </Button>
          </>
        }
      />
    </>
  );
};

export default CreateContact;
