import { useContext } from "react";
import { Context } from "../../context/Context";
import gemini from "../../assets/images.png";
import load from "../../assets/load.gif";

const Layout = () => {
  // const [expand, setExpand] = useState(false);

  const { onSent, recentPrompt, showResults, setShowResults, loading, resultData, setInput, input, prevprompts } = useContext(Context);

  const handleSent = async () => {
    await onSent();
    setInput("");
  };
  return (
    <div className="w-full flex h-screen ">
      <div className="hidden md:w-[15%]   md:flex flex-col ">
        <div className="flex px-8 py-5">
          {/* <img src={logo} alt="gemini logo" className="h-12" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#b1b3b6" fill="none">
            <path d="M4 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className="flex-grow px-8 py-5  ">
          {" "}
          <div className=" flex items-center justify-center gap-2 cursor-pointer py-2 rounded-full bg-white">
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
              {prevprompts.length > 0 ? (
                <div>
                  <ul>
                    {prevprompts.map((prevprompt) => (
                      <li key={prevprompt}></li>
                    ))}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[85%] flex flex-col">
        <div className="flex px-8 py-4">header</div>
        {!showResults ? (
          <div className="flex items-end justify-center  w-[100%] px-8 py-4 h-[50vh]">
            <h1 className="text-4xl font-semibold">Hi, Abdulaziz</h1>
          </div>
        ) : (
          <div className="w-full max-w-5xl mx-auto  px-16 py-6">
            <div>
              <p className="flex items-center gap-4">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#b1b3b6" fill="none">
                    <path
                      d="M12.5212 3H11.5192C10.9563 3.00836 10.3958 3.03083 9.84518 3.06737C5.65374 3.34548 2.31504 6.72539 2.04032 10.9686C1.98656 11.7989 1.98656 12.6588 2.04032 13.4892C2.14038 15.0346 2.82509 16.4655 3.63119 17.6738C4.09923 18.5196 3.79035 19.5754 3.30283 20.4975C2.95132 21.1624 2.77557 21.4949 2.91669 21.735C3.0578 21.9752 3.37302 21.9829 4.00346 21.9982C5.25021 22.0285 6.09091 21.6757 6.75825 21.1845C7.13674 20.9059 7.32598 20.7666 7.45641 20.7506C7.58684 20.7346 7.84352 20.8401 8.3568 21.0511C8.81812 21.2408 9.35376 21.3578 9.84518 21.3904C11.2722 21.4851 12.7652 21.4853 14.1951 21.3904C18.217 21.1236 21.5019 18.0009 22 14"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.59 8.64819C14.9612 9.01675 13.3126 9.7693 14.3167 10.711C14.8072 11.171 15.3536 11.5 16.0404 11.5H19.9596C20.6464 11.5 21.1928 11.171 21.6833 10.711C22.6874 9.7693 21.0388 9.01675 20.41 8.64819C18.9355 7.78394 17.0645 7.78394 15.59 8.64819Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M20 4C20 5.10457 19.1046 6 18 6C16.8954 6 16 5.10457 16 4C16 2.89543 16.8954 2 18 2C19.1046 2 20 2.89543 20 4Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path d="M8.5 15H15.5M8.5 10H10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>{" "}
                <span>{recentPrompt} ?</span>
              </p>
            </div>
            <div className="flex items-start gap-2 py-10">
              <img src={gemini} alt="gemini logo" className="h-6 flex" />
              <div className="fle-grow  px-5 overflow-y-scroll max-h-[55vh] no-scrollbar">
                {loading ? <img src={load} alt="" /> : <p className=" " dangerouslySetInnerHTML={{ __html: resultData }}></p>}
              </div>
            </div>
          </div>
        )}
        <div className="flex-grow px-8 flex justify-center">
          <div className="flex items-center  w-[100%] px-5 md:w-[56rem] border rounded-full md:px-10 md:py-0 h-16 gap-4">
            <span className="hidden md:block bg-white p-2 rounded-full hover:bg-[#f0f4f9] hover:p-2 hover:rounded-full cursor-pointer flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" color="#b1b3b6" fill="none">
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
            <input
              type="text"
              className="flex-grow p-2 focus:outline-none text-lg "
              placeholder="Ask Gemini"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
            />
            <span
              onClick={handleSent}
              className="bg-white p-3 rounded-full hover:bg-[#f0f4f9] hover:p-3 hover:rounded-full cursor-pointer flex justify-center items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" color="#b1b3b6" fill="none">
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
