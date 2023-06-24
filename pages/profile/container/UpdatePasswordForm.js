import React from 'react'

// Mui
import Stack from "@mui/material/Stack";

// React Hook Form
import { useForm, Controller } from "react-hook-form";

// Components
import Button from "@/common/components/Button";
import InputField from '@/common/components/InputField';
import Typography from '@/common/components/Typography';

// Utils
import { ValidationMessages } from "@/common/utils/constants";

const UpdatePasswordForm = () => {

    const { control, watch, handleSubmit } = useForm({
        defaultValues: {
            currentPassword: "",
            newPassword: "",
        },
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <Stack spacing={2}>
            <Typography variant="h4">
                Security
            </Typography>
            <Stack component="form" noValidate spacing={2}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                    <Controller
                        name="currentPassword"
                        control={control}
                        rules={{
                            required: ValidationMessages.required,
                            minLength: 6,
                            validate: (value) =>
                                value.length >= 6 || ValidationMessages.passwordTooShort,
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <InputField label="Current Password" error={error} {...field} />
                        )}
                    />
                    <Controller
                        name="newPassword"
                        control={control}
                        rules={{
                            required: ValidationMessages.required,
                            minLength: 6,
                            validate: (value) =>
                                value === watch("currentPassword") ||
                                ValidationMessages.passwordNotMatch,
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <InputField label="New Password" error={error} {...field} />
                        )}
                    />
                </Stack>
                <Stack alignItems="flex-start" >
                    <Button type="submit" onClick={onSubmit}>
                        Update Password
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default UpdatePasswordForm