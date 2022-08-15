import { useRef } from "react";

const App = () => {
  //   let [millisecond, second, minute] = useRef([0, 0, 0]);
  const millisecond = useRef(0);
  const second = useRef(0);
  const minute = useRef(0);
  let int = useRef(null);
  const timerRef = useRef("0:0:0");

  const start = () => {
    // timerRef.current.innerHTML = ` 0:sdasdas:0`;
    if (int.current !== null) {
      clearInterval(int);
    }
    int.current = setInterval(mainTime, 10);
  };

  const stop = () => {
    console.log("hi");
    clearInterval(int.current);
  };

  const reset = () => {
    // clearInterval(int.current);
    millisecond.current = 0;
    second.current = 0;
    minute.current = 0;
    timerRef.current.innerHTML = "00 : 00 : 00";
  };

  function mainTime() {
    console.log("hi");
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
  }

  return (
    <div className="App">
      <h2 ref={timerRef}>0:0:0</h2>
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};

export default App;
