import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const AuthDemo = () => {
  const { isLoggedIn, userRole, userData, logout, login } = useAuth();
  const [isVisible, setIsVisible] = useState(false);

  const handleQuickLogin = (role) => {
    const mockUserData = {
      email: `demo@${role}.com`,
      role: role,
      name: `Demo ${role}`
    };
    
    login(mockUserData, role);
    alert(`${role} login successful!`);
  };

  // Hide the demo component by default
  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-[#581863] text-white p-2 rounded-full shadow-lg z-50 hover:bg-[#4a1460] transition-colors"
        title="Show Auth Demo"
      >
        🔐
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200 z-50 max-w-xs">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-semibold text-gray-800">Auth Demo</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 text-lg"
        >
          ×
        </button>
      </div>
      
      {!isLoggedIn ? (
        <>
          <p className="text-xs text-gray-600 mb-3">Not logged in</p>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleQuickLogin('user')}
              className="px-3 py-2 text-xs bg-[#581863] text-white rounded hover:bg-[#4a1460] transition-colors"
            >
              Quick User Login
            </button>
            <button
              onClick={() => handleQuickLogin('admin')}
              className="px-3 py-2 text-xs bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Quick Admin Login
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="text-xs text-gray-600 mb-3">
            <p><strong>Logged in as:</strong> {userData?.name}</p>
            <p><strong>Email:</strong> {userData?.email}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={logout}
              className="px-3 py-2 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="px-3 py-2 text-xs bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Hide
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthDemo; 