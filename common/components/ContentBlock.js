import React from "react";

//MUI
import Paper from "@mui/material/Paper";

const ContentBlock = ({ children, sx, elevation = 1, onClick, ...rest }) => {
  return (
    <Paper
      onClick={onClick}
      sx={{
        overflow: "hidden",
        borderRadius: "7px",
        ...sx,
      }}
      variant="elevation"
      elevation={elevation}
    >
      {children}
    </Paper>
  );
};

export default ContentBlock;
