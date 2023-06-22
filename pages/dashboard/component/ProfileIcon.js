import React from "react";

// Mui
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

// Utils
import { Colors } from "@/common/utils/constants";

const Icon = styled("div")({
  width: 60,
  height: 60,
  borderRadius: 60,
  backgroundColor: Colors.secondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: Colors.white,
  fontWeight: 700,
});

const ProfileIcon = () => {
  return (
    <Stack alignItems="flex-end">
      <Icon>JD</Icon>
    </Stack>
  );
};

export default ProfileIcon;
