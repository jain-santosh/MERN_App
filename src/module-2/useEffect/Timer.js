import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval); // Cleans up the timer
    };
  }, []); // Empty brackets mean this runs only once

  return <h2>Seconds: {seconds}</h2>;
}

export default Timer;
