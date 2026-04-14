import React from "react";
import Sidebar from "../../DashboardItems/Sidebar";
import Topbar from "../../DashboardItems/Topbar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-white font-sans">
      <div className="lg:sticky lg:top-0 lg:left-0 lg:h-screen">
        <Sidebar />
      </div>

      <main className="flex-1 p-2">
        <Topbar />

        <div className="bg-gray-100 p-4  rounded-2xl ">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
