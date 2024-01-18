const Navbar = () => {
  return (
    <div className="bg-main-dark flex  justify-between items-center h-12 px-2">
      <div className="">
        <h1 className="text-sm font-semibold text-light-color hidden lg:block ">
          Rozany Chat
        </h1>
      </div>
      {/* user name and logout button */}
      <div className=" md:w-full lg:w-auto flex items-center gap-2 justify-between  lg:justify-end">
        <div className="flex gap-2 items-center">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm text-light-color font-medium">Jimy</span>
        </div>
        <button className="bg-main-very-light text-[12px] text-light-color font-medium py-[2px] px-1 rounded-sm">
          logout
        </button>
      </div>
      {/* -------- user name and logout button  ------- */}
    </div>
  );
};

export default Navbar;
