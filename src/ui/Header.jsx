import React from "react";
import UserAvater from "../features/authentication/UserAvater";
import HeaderMeun from "./HeaderMeun";

function Header() {
  return (
    <div className="flex items-center gap-5 justify-end l bg-white border-b h-16 mr-12">
      <UserAvater />
      <HeaderMeun />
    </div>
  );
}

export default Header;
