import React from "react";

function UserAvater() {
  return (
    <div className="flex flex-row items-center gap-2">
      <img
        className="block w-[2.5rem] h-[2.5rem] aspect-w-1 aspect-h-1 object-cover object-center rounded-full border-2 border-gray-100"
        src="public\default-user.jpg"
        alt="Profile picture"
      />
      <p className="text-md">Lawal Temidayo</p>
    </div>
  );
}

export default UserAvater;
