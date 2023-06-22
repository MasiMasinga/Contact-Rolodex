import api from "../api";
import { handleError } from "../utils";

const isBrowser = typeof window !== `undefined`;

export const registerUser = async (querystring) => {
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

export const loginUser = async (data) => {
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

export const logout = async (data) => {
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

export const deleteAccount = async (data) => {
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

export const updatePassword = async (data) => {
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

export const updateEmail = async (data) => {
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

const AuthService = {
  registerUser,
  loginUser,
  logout,
  deleteAccount,
  updatePassword,
  updateEmail,
};

export default AuthService;
