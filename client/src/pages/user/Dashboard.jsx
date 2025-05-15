import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { useAuth } from "../../context/auth";
import UserMenu from "../../components/UserMenu";

const Dashboard = () => {
  const [auth] = useAuth();

  // Redirect admin users to AdminDashboard
  if (auth?.user?.role === 1) {
    return <Navigate to="/dashboard" replace />;
  }

  // Render normal user dashboard
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-flui m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
