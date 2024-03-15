import React from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { NavLink, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path
      ? "bg-[#f1f1f1] rounded-md text-[#2b00eb]"
      : "";
  };

  return (
    <aside className="flex flex-col bg-white border-r border-[#f3f4f6] w-72  gap-3">
      <div className="">
        <img src="\Health sync.PNG" />
      </div>
      <div className="flex flex-col pl-10 pr-10 gap-4">
        <NavLink
          activeClassName="bg-blue-500 text-white rounded-md"
          to="/home"
          className={`text-start flex items-center gap-3 cursor-pointer hover:bg-[#f1f1f1] hover:rounded-md w-52 h-10 pl-5 ${isActiveLink(
            "/home"
          )}`}
        >
          <span>{<HiOutlineHome size={20} />}</span>Home
        </NavLink>
        <NavLink
          to="/appointment"
          className={`text-start flex items-center gap-3 cursor-pointer hover:bg-[#f1f1f1] hover:rounded-md w-52 h-10 pl-5 ${isActiveLink(
            "/appointment"
          )}`}
        >
          <span>{<HiOutlineHome size={20} />}</span>Appointment
        </NavLink>
        <NavLink
          to="/patients"
          className={`text-start flex items-center gap-3 cursor-pointer hover:bg-[#f1f1f1] hover:rounded-md w-52 h-10 pl-5 ${isActiveLink(
            "/patients"
          )}`}
        >
          <span>{<HiOutlineHome size={20} />}</span>Patients
        </NavLink>
        <NavLink
          to="/settings"
          className={`text-start flex items-center gap-3 cursor-pointer hover:bg-[#f1f1f1] hover:rounded-md w-52 h-10 pl-5 ${isActiveLink(
            "/settings"
          )}`}
        >
          <span>{<HiOutlineHome size={20} />}</span>Settings
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;
