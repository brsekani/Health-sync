import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className=" flex flex-col h-screen w-screen  ">
        <Header />
        <div className="my-auto mx-0 flex flex-col gap-14 bg-[#f9fafb] h-screen overflow-y-scroll ">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
