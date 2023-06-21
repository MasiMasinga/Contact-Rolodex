import React from "react";

// Mui
import TextField from "@mui/material/TextField";

const InputField = React.forwardRef(
  (
    {
      label = "none",
      type = "text",
      disabled = false,
      fullWidth = true,
      size = "small",
      error,
      value,
      onChange,
      hintText,
      multiline,
      ...rest
    },
    ref
  ) => {
    return (
      <TextField
        label={label}
        type={type}
        helperText={error && !disabled ? error.message : hintText}
        disabled={disabled}
        size={size}
        variant="outlined"
        fullWidth={fullWidth}
        inputRef={ref}
        error={!!error}
        onChange={onChange}
        value={value}
        multiline={multiline}
        rows={4}
        autoComplete="off"
        inputProps={{
          autoComplete: "new-password", //Prop necessary to remove autocomplete
          form: {
            autoComplete: "off", //Prop necessary to remove autocomplete
          },
        }}
        {...rest}
      />
    );
  }
);

export default InputField;
