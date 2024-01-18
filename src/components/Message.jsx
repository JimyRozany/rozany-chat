const Message = () => {
  return (
    <div className="flex gap-2">
      {/* message info */}
      <div className="">
        <img
          src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="w-8 h-8 object-cover rounded-full"
        />
        <p className="text-[#afafaf] w-max ">just now</p>
      </div>
      {/* ------- message info ------- */}
      {/* message content */}
      <div className="">
        <p className="py-1 px-2 max-w-max rounded-se-md rounded-b-md text-[#fff] font-medium bg-sky-color">
          hello
        </p>
        <img
          src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="max-w-[80%] my-2 rounded-md object-cover"
        />
      </div>
      {/* ------- message content ------- */}
    </div>
  );
};

export default Message;
