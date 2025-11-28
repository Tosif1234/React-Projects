import React, {useEffect, useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="counter-container">
        <div className="counter-card">
            <h1 className="card-title">Counter & Live Clock</h1>
            <div className="counter-display">
                {count}
            </div>
        <div className="btn-group">
          <div className="btn-container">
            <button className="button-base decrement-btn" onClick={() => setCount(count - 1)}>Decrement</button>
            <button className="button-base increment-btn" onClick={() => setCount(count + 1)}>Increment</button>
          </div>
          <div>
            <button className="button-base reset-btn" onClick={() =>setCount(0) }>reset</button>
          </div>
        </div>

        <p className="time-display">
            Current Time: <span className="time-value">{time.toLocaleTimeString()}</span>
        </p>
        </div>
      </div>
    </>
  );
}

export default Counter;
