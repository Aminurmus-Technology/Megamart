import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Check authentication status on app load
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("userRole");
    const user = localStorage.getItem("userData");

    if (token && role) {
      setIsLoggedIn(true);
      setUserRole(role);
      setUserData(user ? JSON.parse(user) : null);
    }
  }, []);

  const login = (userData, role) => {
    localStorage.setItem("token", "mock-jwt-token-" + Date.now());
    localStorage.setItem("userRole", role);
    localStorage.setItem("userData", JSON.stringify(userData));
    
    setIsLoggedIn(true);
    setUserRole(role);
    setUserData(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userData");
    
    setIsLoggedIn(false);
    setUserRole(null);
    setUserData(null);
  };

  const value = {
    isLoggedIn,
    userRole,
    userData,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 