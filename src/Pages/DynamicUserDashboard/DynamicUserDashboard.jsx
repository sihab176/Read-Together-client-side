import React from "react";


import SellerBookPage from "../DashBoard/SellerBookPage";
import DashboardHomeUser from "../../components/UserDashboard/DashboardHomeUser";


const DynamicUserDashboard = () => {
  return (
    <div>
      {/* <DashboardHomeUser /> */}
      {/* <EditBookForm /> */}
      <SellerBookPage />
    </div>
  );
};

export default DynamicUserDashboard;
