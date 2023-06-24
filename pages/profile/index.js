import React from "react";

// Mui
import Stack from "@mui/material/Stack";

// Components
import DashboardLayout from "@/common/layout/DashboardLayout";
import Button from "@/common/components/Button";
import ProfileIcon from "../dashboard/component/ProfileIcon";
import UpdateEmailForm from "./container/UpdateEmailForm";
import UpdatePasswordForm from "./container/UpdatePasswordForm";

const Profile = () => {
    return (
        <DashboardLayout>
            <Stack>
                <ProfileIcon />
            </Stack>
            <Stack spacing={2}>
                <UpdateEmailForm />
                <UpdatePasswordForm />
                <Stack alignItems="flex-end">
                    <Button variant="delete">
                        Delete Account
                    </Button>
                </Stack>
            </Stack>
        </DashboardLayout>
    );
};

export default Profile;
