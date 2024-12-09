import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const setterUser = (newUser)=>{
    setUser(newUser);
  }

  const login = (response) => {
    localStorage.setItem('token', response?.token);
    setToken(response?.token)
    setUser(response?.user); 
    console.log('USER '+JSON.stringify(response.user))
  };

  const logout = () => {
    setUser(null); 
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, token, setterUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
