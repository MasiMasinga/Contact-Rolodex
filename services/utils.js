import { NotificationMessage } from "@/common/utils/constants";

export const handleError = (error) => {
  if (error && error.message === "timeout") {
    return {
      status: false,
      code: null,
      message: "timeout",
    };
  }

  if (error && error.response) {
    if (error.response.status === 400) {
      const errorData = getErrorData(error);
      if (errorData) {
        return errorData;
      }

      return {
        status: false,
        code: error.response.status,
        message: "Bad request",
      };
    }

    if (error.response.status === 401) {
      const errorData = getErrorData(error);
      if (errorData) {
        return errorData;
      }

      return {
        status: false,
        code: error.response.status,
        message: "Forbidden",
      };
    }

    if (error.response.status === 403) {
      const errorData = getErrorData(error);
      if (errorData) {
        return errorData;
      }

      return {
        status: false,
        code: error.response.status,
        message: "Unauthorized",
      };
    }

    if (error.response.status === 404) {
      return {
        status: false,
        code: error.response.status,
        message: "Not found",
      };
    }

    if (error.response.status === 409) {
      return {
        status: false,
        code: error.response.status,
        message: "Conflict",
      };
    }

    if (error.response.status === 413) {
      return {
        status: false,
        code: error.response.status,
        message: "Selected profile picture is too large",
      };
    }
  }

  return {
    status: false,
    code: null,
    message: NotificationMessages.genericErrorMessage,
  };
};

const getErrorData = (error) => {
  if (error.response.data["non_field_errors"]) {
    return {
      status: false,
      code: error.response.status,
      message: error.response.data["non_field_errors"][0],
    };
  }

  if (error.response.data && error.response.data !== "") {
    return {
      status: false,
      code: error.response.status,
      message: error.response.data,
    };
  }

  return null;
};
