import { useRef, useState } from "react";

const Timer = () => {
  const [startTimer, setStartTimer] = useState(false);
  const millisecond = useRef(0);
  const second = useRef(0);
  const minute = useRef(0);
  let int = useRef(null);
  const timerRef = useRef(null);
  const handleTimer = () => {
    startTimer = !startTimer;
    setStartTimer(startTimer);
    console.log({ startTimer });
    if (startTimer) {
      start();
    } else {
      stop();
    }
    // start();
  };
  const start = () => {
    console.log("start");
    if (int.current !== null) {
      clearInterval(int.current);
    }

    int.current = setInterval(mainTimer, 10);
  };

  const mainTimer = () => {
    millisecond.current += 10;
    if (millisecond.current == 1000) {
      millisecond.current = 0;
      second.current++;
      if (second.current == 60) {
        second.current = 0;
        minute.current++;
        if (minute.current == 60) {
          minute.current = 0;
        }
      }
    }

    let m = minute.current < 10 ? "0" + minute.current : minute.current;
    let s = second.current < 10 ? "0" + second.current : second.current;
    let ms =
      millisecond.current < 10
        ? "00" + millisecond.current
        : millisecond.current < 100
        ? "0" + millisecond.current
        : millisecond.current;

    timerRef.current.innerHTML = ` ${m} : ${s} : ${ms}`;
  };

  const stop = () => {
    console.log("stop");
    clearInterval(int.current);
  };

  const reset = () => {
    // clearInterval(int.current);
    millisecond.current = 0;
    second.current = 0;
    minute.current = 0;
    timerRef.current.innerHTML = "00 : 00 : 00";
  };
  return (
    <div className="timer bg-white flex items-center py-[30px] px-[20px] rounded-[20px] dark:border dark:border-slate-700 dark:bg-slate-800 text-slate-800 dark:text-slate-300">
      {startTimer ? (
        <h5 className=" flex items-center min-w-[135px] justify-between">
          <span className="text-[20px]" ref={timerRef}>
            0:0:0
          </span>
        </h5>
      ) : (
        <h5>Start Time Tracker</h5>
      )}

      <div
        id="start"
        className=" bg-yellow-300 flex justify-center items-center h-[40px] w-[40px] rounded-md ml-8 cursor-pointer"
        onClick={handleTimer}
      >
        <span
          className={`mdi ${
            startTimer ? "mdi-pause-circle" : "mdi-play-circle"
          } text-slate-800 text-[30px]`}
        ></span>
      </div>
    </div>
  );
};

export default Timer;
