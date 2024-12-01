import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Dashboard = () => {
  const { logout } = useContext(AuthContext); 
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout();
    navigate("/"); 
  };

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
