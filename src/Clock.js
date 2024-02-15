import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("useEffect")
    const timerID = setInterval(() => {
    setTime(new Date());
    // console.log("timerID")
    }, 1000);

    return function cleanup(){
      clearInterval(timerID)
    }
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
