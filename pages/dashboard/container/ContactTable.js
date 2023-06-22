import React, { useState } from 'react'

// Mui
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";

// Mui Icons
import WorkIcon from '@mui/icons-material/Work';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';

// Components
import ContentBlock from '@/common/components/ContentBlock';
import InputField from "@/common/components/InputField";
import Select from "@/common/components/Select";
import DataGrid from "@/common/components/DataGrid";
import Typography from "@/common/components/Typography";
import Button from "@/common/components/Button";

// Utils
import { Colors } from "@/common/utils/constants";

const userData = [
    {
        id: 1,
        name: "Masibonge Masinga",
        contact_type: "Business Type",
        phone_number: "072 343 1242",
        email_address: "masingamasibonge@gmail.com",
    },
    {
        id: 2,
        name: "Sihle Masinga",
        contact_type: "Business Type",
        phone_number: "072 343 1242",
        email_address: "masingamasibonge@gmail.com",
    },
    {
        id: 3,
        name: "Khanyisile Masinga",
        contact_type: "Business Type",
        phone_number: "072 343 1242",
        email_address: "masingamasibonge@gmail.com",
    },
    {
        id: 4,
        name: "Nthutuko Masinga",
        contact_type: "Business Type",
        phone_number: "072 343 1242",
        email_address: "masingamasibonge@gmail.com",
    },
]

const ContactTable = () => {
    const [tableDataLoading, setTableDataLoading] = useState(false);
    const [user, setUser] = useState(userData)
    const [filters, setFilters] = useState({
        contact_type: "all",
    });

    const handleFilterChange = (event) => {
        setFilters({ ...filters, contact_type: event.target.value });
    }

    const TableHeaders = [
        {
            field: "name",
            headerName: "Name",
            width: 150,
            renderCell: ({ row: { name } }) => {
                return (
                    <Typography variant="subtitle">
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
                    <>

                    </>
                );
            },
        },
        {
            field: "contact_type",
            headerName: "Contact Type",
            minWidth: 150,
            renderCell: ({ row: { contact_type } }) => {
                return (
                    <Stack alignItems="center" direction="row" spacing={1}>
                        <WorkIcon fontSize="small" sx={{ color: Colors.maroon }} />
                        <Typography variant="subtitle">
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
                        <Typography variant="subtitle">
                            {phone_number}
                        </Typography>
                    </Stack>
                );
            },
        },
        {
            field: "email_address",
            headerName: "Email",
            width: 300,
            renderCell: ({ row: { email_address } }) => {
                return (
                    <Stack direction="row" alignItems="baseline">
                        <Typography variant="subtitle">
                            {email_address}
                        </Typography>
                    </Stack>
                );
            },
        },
        {
            field: "actions",
            headerName: "Actions",
            width: 350,
            renderCell: ({ row: { actions } }) => {
                return (
                    <Stack direction="row" spacing={2}>
                        <Button variant="view">View</Button>
                        <Button variant="edit">Edit</Button>
                        <Button variant="delete">Delete</Button>
                    </Stack>
                );
            },
        },
    ];


    return (
        <ContentBlock sx={{ p: 2, mt: 2 }}>
            <Stack spacing={2} sx={{ p: 1 }}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 2 }} justifyContent="space-between">
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
                    data={user}
                    loading={tableDataLoading}
                    noRowsTitle="No School Activation Data Available!"
                    noRowsDescription="Please ensure teachers and students have activated there accounts."
                />
            </Stack>
        </ContentBlock>
    )
}

export default ContactTable