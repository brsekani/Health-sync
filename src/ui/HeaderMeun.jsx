import React from "react";
import { HiOutlineUser, HiArrowRightOnRectangle } from "react-icons/hi2";

function HeaderMeun() {
  return (
    <div className="flex items-center gap-2 ">
      <button>
        <HiOutlineUser size={20} color="#2b00eb" />
      </button>
      <button>
        <HiArrowRightOnRectangle size={20} color="#2b00eb" />
      </button>
      <button></button>
    </div>
  );
}

export default HeaderMeun;
