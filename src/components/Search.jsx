import React from "react";

const Search = () => {
  return (
    <div className="border-b border-gray p-2">
      <form>
        <input type="text" placeholder="Find a user" className="bg-main-light border-none outline-none  text-light-color font-medium" />
      </form>
      {/* user Card */}
      <div className="flex items-center gap-2 mt-2 hover:bg-main-dark hover:cursor-pointer px-1 py-2 rounded">
        <img src="https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-10 h-10 rounded-full object-cover"/>
        <span className="text-light-color font-medium">Ali</span>
      </div>
      {/* --------- user Card -------- */}
    </div>
  );
};

export default Search;
