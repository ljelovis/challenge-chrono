import React, { useState, useEffect } from "react";
import Button from "./Button.jsx";

function Counter({ incr }) {
  const [counter, setCounter] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let intervalCounter;
    if (isCounting) {
      intervalCounter = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter >= 20) {
            setIsCounting(false);
            return prevCounter;
          } else {
            return prevCounter + incr;
          }
        });
      }, 1000);
    }
    return () => clearInterval(intervalCounter);
  }, [isCounting]);

  function start() {
    setIsCounting(true);
  }

  function stop() {
    setIsCounting(false);
  }

  return (
    <>
      <div className="counter">
        <p>
          Counter +{incr} : <br />
          {counter}
        </p>
        <Button fn={start} text={"Start"} disabled={isCounting} />
        <Button fn={stop} text={"Stop"} disabled={!isCounting} />
      </div>
    </>
  );
}

export default Counter;
