import React from "react";
import { Chats, Navbar, Search } from "./index";

const Sidebar = () => {
  return (
    <div className="bg-[#3e3c61] w-[24rem]">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
