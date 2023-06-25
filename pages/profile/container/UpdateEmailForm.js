import React from "react";

// Mui
import Stack from "@mui/material/Stack";

// React Hook Form
import { useForm, Controller } from "react-hook-form";

// Components
import Button from "@/common/components/Button";
import InputField from "@/common/components/InputField";
import Typography from "@/common/components/Typography";

// Utils
import { ValidationMessages } from "@/common/utils/constants";
import { isValidEmail } from "@/common/utils/validations";

const UpdateEmailForm = () => {
  const { control, watch, handleSubmit } = useForm({
    defaultValues: {
      currentEmail: "",
      newEmail: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Stack noValidate spacing={2}>
      <Typography variant="h4">Email</Typography>
      <Stack component="form" noValidate spacing={2}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
          <Controller
            name="currentEmail"
            control={control}
            rules={{
              required: ValidationMessages.required,
              validate: (value) =>
                isValidEmail(value) || ValidationMessages.inValidEmail,
            }}
            render={({ field, fieldState: { error } }) => (
              <InputField label="Current Email" error={error} {...field} />
            )}
          />
          <Controller
            name="newEmail"
            control={control}
            rules={{
              required: ValidationMessages.required,
              validate: (value) =>
                value === watch("currentEmail") ||
                ValidationMessages.emailDoNotMatch,
            }}
            render={({ field, fieldState: { error } }) => (
              <InputField label="New Email" error={error} {...field} />
            )}
          />
        </Stack>
        <Stack alignItems="flex-start">
          <Button type="submit" onClick={onSubmit}>
            Update Email
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default UpdateEmailForm;
