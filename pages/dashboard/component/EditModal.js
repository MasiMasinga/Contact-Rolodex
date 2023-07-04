import React, { useState, useContext } from "react";

//Mui
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";

// Context
import { DashboardContext } from "@/pages/dashboard/context/DashboardContext"

// React Hook Form
import { useForm, Controller } from "react-hook-form";

// Mui Icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Components
import DialogForm from "@/common/components/DialogForm";
import Button from "@/common/components/Button";
import InputField from "@/common/components/InputField";
import Select from "@/common/components/Select";

// Utils
import { ValidationMessages } from "../../../common/utils/constants";
import { isValidEmail } from "../../../common/utils/validations";

const EditModal = ({ open, loading, handleClose }) => {
    const { handleUpdateContact } = useContext(DashboardContext);
    const { control, handleSubmit } = useForm({
        defaultValues: {
            avatar: "",
            name: "",
            email: "",
            contact_type: "",
            phone_number: "",
        },
    });

    const onSubmit = handleSubmit((data) => {
        handleUpdateContact(data);
    });

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
                    <Controller
                        name="name"
                        control={control}
                        rules={{
                            required: ValidationMessages.required,
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <InputField
                                label="Name"
                                defaultValue={"Masibonge Masinga"}
                                error={error}
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: ValidationMessages.required,
                            validate: (value) =>
                                isValidEmail(value) || ValidationMessages.inValidEmail,
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <InputField
                                label="Email"
                                defaultValue={"masingamasibonge@gmail.com"}
                                error={error}
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        name="contact_type"
                        control={control}
                        rules={{
                            required: ValidationMessages.required,
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <Select
                                label="Contact Type"
                                defaultValue={"Friend"}
                                error={error}
                                {...field}
                            >
                                <MenuItem value="all">Business</MenuItem>
                                <MenuItem value="all">Personal</MenuItem>
                                <MenuItem value="all">Family</MenuItem>
                                <MenuItem value="all">Friend</MenuItem>
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
                            <InputField
                                label="Phone Number"
                                defaultValue={"072 472 1654"}
                                error={error}
                                {...field}
                            />
                        )}
                    />
                </Stack>
            }
            actions={
                <>
                    <Button variant="delete" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button type="submit" onClick={onSubmit} isLoading={loading}>
                        Update
                    </Button>
                </>
            }
        />
    );
};

export default EditModal;
