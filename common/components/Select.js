import React from "react";

// Material UI
import TextField from "@mui/material/TextField";

const Select = React.forwardRef(
  (
    {
      id,
      name,
      label,
      defaultValue,
      value,
      onChange,
      onBlur,
      error = null,
      disabled = false,
      filter = false,
      sort = false,
      fullWidth = true,
      loading = false,
      children,
      hintText,
      ...rest
    },
    ref
  ) => {
    return (
      <TextField
        id={id || name}
        name={name}
        select
        label={label}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error !== null}
        helperText={error && !disabled ? error.message : hintText}
        disabled={disabled || loading}
        fullWidth={fullWidth}
        size="small"
        inputRef={ref}
        {...rest}
      >
        {children}
      </TextField>
    );
  }
);

export default Select;
