import React from "react";

const NavItem = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center hover:text-black text-gray-700 cursor-pointer">
      <icon className="text-lg" />
      <label className="text-sm">{label}</label>
    </div>
  );
};

export default NavItem;
