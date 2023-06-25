import React, { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  let value = {};
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
