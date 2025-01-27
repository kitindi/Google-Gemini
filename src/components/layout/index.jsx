import { useState } from "react";

const Layout = () => {
  // const [expand, setExpand] = useState(false);
  return (
    <div className="w-full flex">
      <div className="hidden md:w-[15%]  bg-blue-200 md:flex flex-col">
        <div className="flex p-8">logo</div>
        <div className="flex-grow p-8 bg-blue-400">
          {" "}
          <h3 className="text-white text-3xl">Sidebar</h3>
        </div>
      </div>
      <div className="w-[100%] md:w-[85%] flex flex-col">
        <div className="flex p-8">header</div>
        <div className="flex-grow px-8 flex items-end justify-center py-28">
          <div className="flex items-center  w-[100%] px-5 py-2 md:w-[56rem] border rounded-full md:px-10 md:py-3 gap-4">
            <span>Icon</span> <input type="text" className="flex-grow p-3 focus:outline-none" />
            <span>icon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
