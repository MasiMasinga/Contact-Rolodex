import React, { useState, createContext, useContext } from "react";

// Context
import { StateContext } from "@/common/context/StateContext";

// Api
import api from "@/services/api";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const { setNotificationMessage } = useContext(StateContext);
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleUpdateEmail = async (data) => {
        setLoading(true)

        let postData = {};

        const response = await api.post(`api/auth/update-email/${id}`, postData);

        if (response.data === 200) {
            setUser(response.data);
            setNotificationMessage({
                message: "Email successfully updated.",
                type: "success"
            });
            setLoading(false);
        } else {
            setNotificationMessage({
                message: "An error occurred trying to update your email.",
                type: "error"
            });
            setLoading(false);
        }
    };

    const handleUpdatePassword = async (data) => {
        setLoading(true)

        let postData = {};

        const response = await api.put(`api/auth/update-password/${id}`, postData);

        if (response.data === 200) {
            setUser(response.data);
            setNotificationMessage({
                message: "Password successfully updated.",
                type: "success"
            });
            setLoading(false);
        } else {
            setNotificationMessage({
                message: "An error occurred trying to update your password.",
                type: "error"
            });
            setLoading(false);
        }
    };

    let value = {
        user,
        loading,
        handleUpdateEmail,
        handleUpdatePassword,
    };

    return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
};

