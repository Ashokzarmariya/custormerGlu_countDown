import { useState } from "react";
import CountDown from "./Components/CountDown";


function App() {
  const [status, setStatus] = useState("PAUSE");
  const timeLimit = 35;
  const [time, setTime] = useState(timeLimit);
  const handleRestart = () => setTime(timeLimit);
  return (
    <div className="flex w-screen lg:mx-20">
      <div className="w-[1px] h-screen bg-white"></div>
      <div className="App  min-h-[100vh] flex flex-col justify-center flex-1 text-white">
      
      <div>
        <h1 className="text-3xl font-bold pb-5 mx-10">Count Down</h1>
        <hr />
        <CountDown
          status={status}
          timeLimit={timeLimit}
          time={time}
          setTime={setTime}
        />
        <hr />
        <div className="flex flex-col lg:flex-row lg:space-x-10 py-10 font-bold text-black mx-10">
          <button
            className="px-8 rounded-sm py-3 bg-[#2caeff] mb-5"
            onClick={() => {
              status === "PAUSE" ? setStatus("PLAY") : setStatus("PAUSE");
            }}
          >{`${status === "PAUSE" ? "PLAY" : "PAUSE"}`}</button>
          <button
            className="px-8 rounded-sm py-3 bg-gray-400  mb-5"
            onClick={handleRestart}
          >
            RESTART
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default App;
