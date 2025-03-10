import React, { useState } from "react";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiOutlineViewList,
  HiOutlinePhone,
} from "react-icons/hi";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={` h-src transition-all duration-300 bg-gray-800 text-white border-t-2 border-t-gray-800 ${
        isCollapsed ? "w-[80px]" : "w-[20%]"
      }`}
    >
      <div className="mx-7">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          {!isCollapsed && <h3 className="text-2xl mt-4">Sidebar</h3>}
          <button onClick={toggleSidebar} className="mt-5">
            {isCollapsed ? (
              <MdKeyboardDoubleArrowRight size={27} />
            ) : (
              <MdKeyboardDoubleArrowLeft size={27} />
            )}
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`flex flex-col gap-6 mt-8 text-lg ${
            isCollapsed ? "items-center" : ""
          }`}
        >
          <div className="flex items-center">
            <HiOutlineHome size={25} />
            {!isCollapsed && <label className="ml-6">Home</label>}
          </div>
          <div className="flex items-center">
            <HiOutlineUser size={25} />
            {!isCollapsed && <label className="ml-6">About</label>}
          </div>
          <div className="flex items-center">
            <HiOutlineShoppingCart size={25} />
            {!isCollapsed && <label className="ml-6">Buy</label>}
          </div>
          <div className="flex items-center">
            <HiOutlineViewList size={25} />
            {!isCollapsed && <label className="ml-6">Categories</label>}
          </div>
          <div className="flex items-center">
            <HiOutlinePhone size={25} />
            {!isCollapsed && <label className="ml-6">Contact</label>}
          </div>
        </div>
      </div>
    </div>
  );
};
