import React, { useState, createContext, useContext } from "react";

// Context
import { StateContext } from "@/common/context/StateContext";

// Api
import api from "@/services/api";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const { setNotificationMessage } = useContext(StateContext);
    const [contacts, setContacts] = useState([]);
    const [contactStats, setContactStats] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleCreateContact = async (data) => {
        //setLoading(true)

        setContacts(data)
        // const response = await api.post(`api/contacts`, postData);

        // if (response.data === 200) {
        //     setContacts(response.data);
        //     setNotificationMessage({
        //         message: "Contact successfully created.",
        //         type: "success"
        //     });
        //     setLoading(false);
        // } else {
        //     setNotificationMessage({
        //         message: "An error occurred trying to create your contact.",
        //         type: "error"
        //     });
        //     setLoading(false);
        // }
    };

    const handleUpdateContact = async (data) => {
        setLoading(true)

        let postData = {};

        const response = await api.put(`api/contacts/${id}`, postData);

        if (response.data === 200) {
            setContacts(response.data);
            setNotificationMessage({
                message: "Contact successfully updated.",
                type: "success"
            });
            setLoading(false);
        } else {
            setNotificationMessage({
                message: "An error occurred trying to update your contact.",
                type: "error"
            });
            setLoading(false);
        }
    };

    const handleUDeleteContact = async (data) => {
        setLoading(true)

        let postData = {};

        const response = await api.delete(`api/contacts/${id}`, postData);

        if (response.data === 200) {
            setContacts(response.data);
            setNotificationMessage({
                message: "Contact successfully created.",
                type: "success"
            });
            setLoading(false);
        } else {
            setNotificationMessage({
                message: "An error occurred trying to create your contact.",
                type: "error"
            });
            setLoading(false);
        }
    };

    const handleGetContact = async () => { };

    const handleGetContacts = async () => { };

    const handleGetContactsAdded = async () => { };

    const handleGetTotalContactsAdded = async () => { };

    const handleGetDeletedContacts = async () => { };


    let value = {
        contacts,
        contactStats,
        loading,
        handleCreateContact,
        handleUpdateContact,
        handleUDeleteContact,
        handleGetContact,
        handleGetContacts,
        handleGetContactsAdded,
        handleGetTotalContactsAdded,
        handleGetDeletedContacts
    };

    return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};

