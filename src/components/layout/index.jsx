import { useState } from "react";
import logo from "../../assets/images.png";

const Layout = () => {
  // const [expand, setExpand] = useState(false);
  return (
    <div className="w-full flex">
      <div className="hidden md:w-[15%]  bg-[#f0f4f9] md:flex flex-col">
        <div className="flex p-8">
          {/* <img src={logo} alt="gemini logo" className="h-12" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#b1b3b6" fill="none">
            <path d="M4 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className="flex-grow p-8 bg-[#f0f4f9]">
          {" "}
          <div className=" flex items-center justify-center gap-2 cursor-pointer border border-gray-300 py-2 rounded-full bg-white">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="27" height="27" color="#b1b3b6" fill="none">
                <path d="M12 4V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <span className="text-sm text-slate-900 font-semibold">New Chat</span>
          </div>
          <div>
            <h3 className="text-lg font-regular py-8 mt-10 text-slate-800">Recent</h3>
            <div>
              <ul>
                <li className="flex items-center gap-2">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#b1b3b6" fill="none">
                      <path
                        d="M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm">How to hack Wi-Fi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[85%] flex flex-col">
        <div className="flex p-8">header</div>
        <div className="flex items-end justify-center  w-[100%] p-8 h-[60vh]">
          <h1 className="text-4xl font-semibold">Hi, Abdulaziz</h1>
        </div>
        <div className="flex-grow px-8 flex items-end justify-center py-28">
          <div className="flex items-center  w-[100%] px-5 py-2 md:w-[56rem] border rounded-full md:px-10 md:py-3 gap-4">
            <span className="bg-white p-3 rounded-full hover:bg-[#f0f4f9] hover:p-3 hover:rounded-full cursor-pointer flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#b1b3b6" fill="none">
                <path
                  d="M17 11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V7C7 4.23858 9.23858 2 12 2"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 11C20 15.4183 16.4183 19 12 19M12 19C7.58172 19 4 15.4183 4 11M12 19V22"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.3327 4.64612C15.5394 4.49594 16.4959 3.53944 16.6461 2.33267C16.6689 2.14999 16.8159 2 17 2C17.1841 2 17.3311 2.14999 17.3539 2.33267C17.5041 3.53944 18.4606 4.49594 19.6673 4.64612C19.85 4.66885 20 4.81591 20 5C20 5.1841 19.85 5.33115 19.6673 5.35388C18.4606 5.50406 17.5041 6.46056 17.3539 7.66733C17.3311 7.85001 17.1841 8 17 8C16.8159 8 16.6689 7.85001 16.6461 7.66733C16.4959 6.46056 15.5394 5.50406 14.3327 5.35388C14.15 5.33115 14 5.1841 14 5C14 4.81591 14.15 4.66885 14.3327 4.64612Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>{" "}
            <input type="text" className="flex-grow p-3 focus:outline-none text-lg " placeholder="Ask Gemini" />
            <span className="bg-white p-3 rounded-full hover:bg-[#f0f4f9] hover:p-3 hover:rounded-full cursor-pointer flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#b1b3b6" fill="none">
                <path
                  d="M21.0477 3.05293C18.8697 0.707363 2.48648 6.4532 2.50001 8.551C2.51535 10.9299 8.89809 11.6617 10.6672 12.1581C11.7311 12.4565 12.016 12.7625 12.2613 13.8781C13.3723 18.9305 13.9301 21.4435 15.2014 21.4996C17.2278 21.5892 23.1733 5.342 21.0477 3.05293Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path d="M11.5 12.5L15 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
