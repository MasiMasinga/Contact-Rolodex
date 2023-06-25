import React, { useState } from "react";

// Mui
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Components
import DashboardLayout from "@/common/layout/DashboardLayout";
import ProfileIcon from "./component/ProfileIcon";
import ContactStats from "./container/ContactStats";
import CreateContact from "./container/CreateContact";
import ContactTable from "./container/ContactTable";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Stack sx={{ my: 1 }}>
        <ProfileIcon />
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ContactStats />
        </Grid>
        <Grid item xs={12} md={6}>
          <CreateContact />
        </Grid>
      </Grid>
      <ContactTable />
    </DashboardLayout>
  );
};

export default Dashboard;
