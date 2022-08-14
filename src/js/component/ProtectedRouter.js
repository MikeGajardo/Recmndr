import React from 'react'

const ProtectedRoute = ({ children }) => {
    const { user } = UserAuth();
    if (!user) {
      return <Redirect push to="/Signin" />;
    } else {
      return children;
    }
  };

export default ProtectedRoute