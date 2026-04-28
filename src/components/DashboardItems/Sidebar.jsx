import { use } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
import { LuLayoutDashboard } from "react-icons/lu";
import {
  BiBookOpen,
  BiCalendar,
  BiCheckSquare,
  BiSolidBarChartAlt2,
} from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { FaUserSecret } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { FiHelpCircle, FiLogOut } from "react-icons/fi";
import { Link, NavLink } from "react-router";

const Sidebar = () => {
  //   const { logOutUser } = use(AuthContext);
  const menuItems = [
    { icon: <LuLayoutDashboard size={20} />, label: "Dashboard", path: "/Dashboard" },
    { icon: <BiCheckSquare size={20} />, label: "My Orders", path: "/Dashboard/my-orders", badge: "12+" },
    { icon: <BiCalendar size={20} />, label: "Payment History", path: "/Dashboard/payment-history" },
    { icon: <MdFavoriteBorder size={20} />, label: "Wishlist", path: "/Dashboard/wishlist" },
    { icon: <BiSolidBarChartAlt2 size={20} />, label: "Analytics", path: "/Dashboard/analytics" },
    { icon: <FaUserSecret size={20} />, label: "Team", path: "/Dashboard/team" },
  ];
  const handleLogout = () => {
    // logOutUser();
    alert("Logged out successfully");
  };

  return (
    <aside className="w-64 lg:block hidden bg-gray-100  p-6 flex flex-col justify-between ">
      <div>
        <Link to="/" className="flex items-center gap-2 group mb-8">
          <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-md group-hover:scale-105 transition">
            <BiBookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl md:text-2xl font-semibold">
            Book<span className="primary-text">loop</span>
          </span>
        </Link>

        <nav className="space-y-2">
          <p className="text-xs text-gray-400 uppercase mb-4">Menu</p>
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
               end={item.path === "/Dashboard"}
              to={item.path}
              className={({ isActive }) => `flex items-center justify-between p-3 rounded-xl cursor-pointer ${isActive ? "bg-[#1E5128] text-white" : "text-gray-500 hover:bg-gray-50"}`}
            >
              <div className="flex items-center gap-3">
                {item.icon} <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="bg-[#1E5128] text-white text-[10px] px-1.5 py-0.5 rounded-md">
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="space-y-4">
        <p className="text-xs text-gray-400 uppercase">General</p>
        <div className="flex items-center gap-3 text-gray-500 p-2 cursor-pointer">
          <CiSettings size={20} /> Settings
        </div>
        <div className="flex items-center gap-3 text-gray-500 p-2 cursor-pointer">
          <FiHelpCircle size={20} /> Help
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full text-red-500 py-2 px-3 cursor-pointer hover:bg-red-400 hover:text-white rounded-lg"
        >
          <FiLogOut size={20} /> Logout
        </button>

        {/* Ad Box */}
        <div className="bg-[url('/sidebarImge.png')] bg-cover bg-center rounded-2xl p-6 text-white mt-2">
          <p className="text-sm mb-4">Download our Mobile App</p>
          <button className="bg-[#1E5128] w-full py-2 rounded-lg text-xs">
            Download
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
