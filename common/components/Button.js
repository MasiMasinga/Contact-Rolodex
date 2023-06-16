import React from "react";

// Mui
import MuiButton from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const Button = ({
    type = "button",
    variant = "contained",
    isLoading = false,
    disabled = false,
    fullWidth = false,
    compact = false,
    onClick,
    children,
    sx,
    ...rest
}) => {
    return (
        <MuiButton
            type={type}
            disabled={disabled || isLoading}
            onClick={onClick}
            fullWidth={fullWidth}
            endIcon={isLoading && <CircularProgress size={20} />}
            variant={variant}
            sx={{
                py: compact ? 0.5 : 1.5,
                px: compact ? 2 : 4,
                ...sx,
            }}
            {...rest}
        >
            {children}
        </MuiButton>
    );
};

export default Button;
