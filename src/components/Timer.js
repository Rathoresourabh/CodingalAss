import React, { useState, useEffect } from "react";

function Timer() {
  const [counter, setCounter] = useState(600);

  var minutes = Math.floor(counter / 60);
  var seconds = counter % 60;
  var FormattedTime = minutes + ":" + seconds;

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  return (
    <div>
      <div className="timer-text">{FormattedTime}</div>
    </div>
  );
}
export default Timer;
