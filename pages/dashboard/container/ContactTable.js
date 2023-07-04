import React, { useState, useContext } from "react";

// Mui
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";

// Context
import { DashboardContext } from "../../dashboard/context/DashboardContext";

// Mui Icons
import WorkIcon from "@mui/icons-material/Work";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";

// Components
import ContentBlock from "@/common/components/ContentBlock";
import InputField from "@/common/components/InputField";
import Select from "@/common/components/Select";
import DataGrid from "@/common/components/DataGrid";
import Typography from "@/common/components/Typography";
import Button from "@/common/components/Button";
import ViewModal from "../component/ViewModal";
import EditModal from "../component/EditModal";
import DeleteModal from "../component/DeleteModal";

// Utils
import { Colors } from "@/common/utils/constants";

const userData = [
  {
    id: 1,
    name: "Masibonge Masinga",
    contact_type: "Business",
    phone_number: "072 343 1242",
    email_address: "masingamasibonge@gmail.com",
  },
  {
    id: 2,
    name: "Sihle Masinga",
    contact_type: "Personal",
    phone_number: "072 343 1242",
    email_address: "masingamasibonge@gmail.com",
  },
  {
    id: 3,
    name: "Khanyisile Masinga",
    contact_type: "Friend",
    phone_number: "072 343 1242",
    email_address: "masingamasibonge@gmail.com",
  },
  {
    id: 4,
    name: "Nthutuko Masinga",
    contact_type: "Personal",
    phone_number: "072 343 1242",
    email_address: "masingamasibonge@gmail.com",
  },
];

const ContactTable = () => {
  const { contacts } = useContext(DashboardContext);
  const [tableDataLoading, setTableDataLoading] = useState(false);
  const [openDeleteModal, setDeleteModal] = useState(false);
  const [openEditModal, setEditModal] = useState(false);
  const [openViewModal, setViewModal] = useState(false);
  const [filters, setFilters] = useState({
    contact_type: "all",
  });

  console.log("contacts", contacts)

  const handleFilterChange = (event) => {
    setFilters({ ...filters, contact_type: event.target.value });
  };

  const TableHeaders = [
    {
      field: "name",
      headerName: "Name",
      width: 150,
      sortable: false,
      renderCell: ({ row: { name } }) => {
        return <Typography variant="subtitle">{name}</Typography>;
      },
    },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      sortable: false,
      renderCell: ({ row: { image } }) => {
        return <></>;
      },
    },
    {
      field: "contact_type",
      headerName: "Contact Type",
      minWidth: 150,
      sortable: false,
      renderCell: ({ row: { contact_type } }) => {
        return (
          <Stack alignItems="center" direction="row" spacing={1}>
            {
              contact_type === "Business" ? <WorkIcon fontSize="small" sx={{ color: Colors.maroon }} /> :
                contact_type === "Family" ? <FamilyRestroomIcon fontSize="small" sx={{ color: Colors.green }} /> :
                  contact_type === "Friend" ? <Diversity3Icon fontSize="small" sx={{ color: Colors.yellow }} /> :
                    contact_type === "Personal" ? <SettingsAccessibilityIcon fontSize="small" sx={{ color: Colors.purple }} /> :
                      <></>
            }
            <Typography variant="subtitle">{contact_type}</Typography>
          </Stack>
        );
      },
    },
    {
      field: "phone_number",
      headerName: "Phone Number",
      width: 150,
      sortable: false,
      renderCell: ({ row: { phone_number } }) => {
        return (
          <Typography variant="subtitle">{phone_number}</Typography>
        );
      },
    },
    {
      field: "email_address",
      headerName: "Email",
      width: 300,
      sortable: false,
      renderCell: ({ row: { email_address } }) => {
        return (
          <Typography variant="subtitle">{email_address}</Typography>
        );
      },
    },
    {
      width: 350,
      sortable: false,
      renderCell: () => {
        return (
          <Stack direction="row" spacing={2}>
            <Button variant="view" onClick={() => setViewModal(true)}>
              View
            </Button>
            <Button variant="edit" onClick={() => setEditModal(true)}>
              Edit
            </Button>
            <Button variant="delete" onClick={() => setDeleteModal(true)}>
              Delete
            </Button>
          </Stack>
        );
      },
    },
  ];

  return (
    <ContentBlock sx={{ p: 2, mt: 2 }}>
      <Stack spacing={2} sx={{ p: 1 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2 }}
          justifyContent="space-between"
        >
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
              onChange={handleFilterChange}
              sx={{ minWidth: "200px", minHeight: "40px" }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="business">Business</MenuItem>
              <MenuItem value="personal">Personal</MenuItem>
              <MenuItem value="family">Family</MenuItem>
              <MenuItem value="friend">Friend</MenuItem>
            </Select>
          </Stack>
        </Stack>
        <DataGrid
          height="calc(100vh - 420px)"
          columns={TableHeaders}
          data={[]}
          loading={tableDataLoading}
          noRowsTitle="No Contacts Data Available!"
          noRowsDescription="Please add accounts."
          getRowId={(row) => row.id}
        />
        <ViewModal
          open={openViewModal}
          handleClose={() => setViewModal(false)}
        />
        <EditModal
          open={openEditModal}
          handleClose={() => setEditModal(false)}
        />
        <DeleteModal
          open={openDeleteModal}
          handleClose={() => setDeleteModal(false)}
        />
      </Stack>
    </ContentBlock>
  );
};

export default ContactTable;
