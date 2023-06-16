import api from "../api";
import { handleError } from "../utils";

const isBrowser = typeof window !== `undefined`;

export const createContact = async (querystring) => {
    if (!isBrowser) return false;

    return await api
        .get(`/school/certificates/?${querystring}`)
        .then(function (response) {
            if (response.status === 200) {
                return {
                    status: true,
                    data: response.data,
                };
            }
        })
        .catch(function (error) {
            return handleError(error);
        });
};

export const getContact = async (data) => {
    if (!isBrowser) return false;

    return await api
        .put(`/school/certificates/approve/`, data)
        .then(function (response) {
            if (response.status === 200) {
                return {
                    status: true,
                    data: response.data,
                };
            }
        })
        .catch(function (error) {
            return handleError(error);
        });
};

export const getContacts = async (data) => {
    if (!isBrowser) return false;

    return await api
        .put(`/school/certificates/approve/`, data)
        .then(function (response) {
            if (response.status === 200) {
                return {
                    status: true,
                    data: response.data,
                };
            }
        })
        .catch(function (error) {
            return handleError(error);
        });
};

export const updateContact = async (data) => {
    if (!isBrowser) return false;

    return await api
        .put(`/school/certificates/approve/`, data)
        .then(function (response) {
            if (response.status === 200) {
                return {
                    status: true,
                    data: response.data,
                };
            }
        })
        .catch(function (error) {
            return handleError(error);
        });
};

export const deleteContact = async (data) => {
    if (!isBrowser) return false;

    return await api
        .put(`/school/certificates/approve/`, data)
        .then(function (response) {
            if (response.status === 200) {
                return {
                    status: true,
                    data: response.data,
                };
            }
        })
        .catch(function (error) {
            return handleError(error);
        });
};

const ContactsService = {
    createContact,
    getContact,
    getContacts,
    updateContact,
    deleteContact,
};

export default ContactsService;
