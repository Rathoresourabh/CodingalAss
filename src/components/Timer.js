import React, { useState, useEffect } from "react";

function Timer({ open }) {
  const [customTimeout, setCustomTimeout] = useState(null);
  const [counter, setCounter] = useState(600);

  var minutes = Math.floor(counter / 60);
  var seconds = counter % 60;
  var FormattedTime = minutes + ":" + seconds;

  useEffect(() => {
    counter > 0 &&
      setCustomTimeout(setTimeout(() => setCounter(counter - 1), 1000));
  }, [counter]);

  useEffect(() => {
    if (open) {
      setCustomTimeout(clearTimeout(customTimeout));
    } else {
      setCounter(counter - 1);
    }
  }, [open]);
  return (
    <div>
      <div className="timer-text">{FormattedTime}</div>
    </div>
  );
}
export default Timer;
