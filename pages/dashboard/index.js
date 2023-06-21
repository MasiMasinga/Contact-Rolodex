import React, { useState } from "react";

// Mui
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

// Components
import DashboardLayout from "@/common/layout/DashboardLayout";
import Button from "@/common/components/Button";
import ProfileIcon from "./component/ProfileIcon";
import ContactStats from "./container/ContactStats";
import DataGrid from "@/common/components/DataGrid";
import Typography from "@/common/components/Typography";
import ContentBlock from "@/common/components/ContentBlock";
import InputField from "@/common/components/InputField";
import Select from "@/common/components/Select";

// Utils
import { Colors } from "@/common/utils/constants";

const userData = [
  {
    id: 1,
    name: "Masibonge Masinga",
    contact_type: "Business Type",
    phone_number: "072 343 1242",
    email_address: "masingamasibonge@gmail.com",
  }
]

const Dashboard = () => {
  const [tableDataLoading, setTableDataLoading] = useState(false);
  const [user, setUser] = useState(userData)
  const [filters, setFilters] = useState({
    contact_type: "all",
  });

  const TableHeaders = [
    {
      field: "name",
      headerName: "Name",
      width: 150,
      renderCell: ({ row: { name } }) => {
        return (
          <Typography
            variant="paragraph"
          >
            {name}
          </Typography>
        );
      },
    },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: ({ row: { image } }) => {
        return (
          <Typography
            variant="paragraph"
          >
            {image}
          </Typography>
        );
      },
    },
    {
      field: "contact_type",
      headerName: "Contact Type",
      minWidth: 150,
      renderCell: ({ row: { contact_type } }) => {
        return (
          <Stack direction="row" alignItems="baseline">
            <Typography
              variant="paragraph"
            >
              {contact_type}
            </Typography>
          </Stack>
        );
      },
    },
    {
      field: "phone_number",
      headerName: "Phone Number",
      width: 150,
      renderCell: ({ row: { phone_number } }) => {
        return (
          <Stack direction="row" alignItems="baseline">
            <Typography
              variant="paragraph"
            >
              {phone_number}
            </Typography>
          </Stack>
        );
      },
    },
    {
      field: "email_address",
      headerName: "Email",
      width: 200,
      renderCell: ({ row: { email_address } }) => {
        return (
          <Stack direction="row" alignItems="baseline">
            <Typography
              variant="paragraph"
            >
              {email_address}
            </Typography>
          </Stack>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: ({ row: { actions } }) => {
        return (
          <Stack direction="row">
            <Button>View</Button>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </Stack>
        );
      },
    },
  ];
  
  return (
    <DashboardLayout>
      <Stack spacing={2} sx={{ p: 1 }}>
        <ProfileIcon />
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        < ContactStats />

        </Grid>
        <Grid item xs={12} md={6}>
        <Button fullWidth>Add Contact</Button>  

        </Grid>
      </Grid>
      <ContentBlock sx={{mt: 2}}>
        <Stack spacing={2} sx={{ p: 1 }}>
          <Stack direction="row" justifyContent="space-between">
            <InputField
              type="search"
              label="Search"
              placeholder="Search..."
              fullWidth={false}
              sx={{ minWidth: "300px", minHeight: "40px" }}
            />
            <Stack justifyContent="center">
              <Select
                value={filters.contact_type}
                label="Sort By"
                sx={{ minWidth: "200px", minHeight: "40px" }}
              >
                <MenuItem value="high">Battery (High - Low)</MenuItem>
                <MenuItem value="low">Battery (Low - High)</MenuItem>
              </Select>
            </Stack>
          </Stack>
          <DataGrid
            height="calc(100vh - 531px)"
            columns={TableHeaders}
            data={user}
            loading={tableDataLoading}
            noRowsTitle="No School Activation Data Available!"
            noRowsDescription="Please ensure teachers and students have activated there accounts."
          />
        </Stack>
      </ContentBlock>
    </DashboardLayout>
  );
};

export default Dashboard;
