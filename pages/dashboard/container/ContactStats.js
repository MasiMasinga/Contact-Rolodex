import React from "react";

// Mui
import Stack from "@mui/material/Stack";

// Components
import Typography from "@/common/components/Typography";

// Utils
import { Colors } from "@/common/utils/constants";

const ContactStats = () => {
  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{
        width: "calc(100% - 2px)",
        bgcolor: Colors.greyMed,
        height: "150px",
        borderRadius: 2,
        p: 2,
      }}
    >
      <Stack spacing={1}>
        <Typography variant="h4" sx={{ fontWeight: 400 }}>
          Contacts Added
        </Typography>
        <Typography variant="h4">23</Typography>
      </Stack>
      <Stack spacing={1}>
        <Typography variant="h4" sx={{ fontWeight: 400 }}>
          Total number of contacts
        </Typography>
        <Typography variant="h4">46</Typography>
      </Stack>
      <Stack spacing={1}>
        <Typography variant="h4" sx={{ fontWeight: 400 }}>
          Total number of contacts deleted
        </Typography>
        <Typography variant="h4">4</Typography>
      </Stack>
    </Stack>
  );
};

export default ContactStats;
