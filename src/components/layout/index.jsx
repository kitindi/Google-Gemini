const Layout = () => {
  return (
    <div>
      {/* header */}
      <div className="flex ">
        <div className="w-[10%] bg-white md:bg-gray-100 py-8 px-10">
          <div className="bg-gray-100 h-12 w-12 hover:w-12 hover:h-12 hover:rounded-full hover:bg-gray-200 hover:cursor-pointer flex justify-center items-center rounded-full transition-all ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#b1b3b6" fill="none">
              <path d="M4 5L20 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4 12L20 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4 19L20 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div className="w-4/5 bg-white p-8">
          <div className="text-center flex justify-end items-center gap-3">
            <div className="bg-white p-3 hover:bg-gray-100 hover:p-3 rounded-full cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2b2e4a" viewBox="0 0 256 256">
                <path d="M72,60A12,12,0,1,1,60,48,12,12,0,0,1,72,60Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,184Z"></path>
              </svg>
            </div>
            <div className="h-10 w-10 rounded-full bg-blue-800 font-medium text-white flex justify-center items-center cursor-pointer">A</div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="hidden md:block md:w-[10%] bg-gray-100 h-screen p-10">
          <div className="">Sidebar</div>
        </div>
        <div className="w-4/5 bg-white h-screen p-10">
          <div className="">Main</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
