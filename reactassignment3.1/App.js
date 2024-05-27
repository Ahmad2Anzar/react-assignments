
import StopWatch from "./components/StopWatch";
import Timer from "./timer";
import StopWatch from "./stopwatch";

import { useState } from "react";

function App() {
  
  const [showTimer, setShowTimer] = useState(true);
  const [showStopWatch, setShowStopWatch] = useState(true);

  return (
    <div className="App">
      {/* Conditionally render Timer component based on showTimer state */}
      {showTimer ? <Timer /> : null}
      {/* Button to toggle the visibility of Timer */}
      <button onClick={() => setShowTimer(!showTimer)}>TOGGLE TIMER</button>
      <br />
      <br />
      <hr />
      {/* Conditionally render StopWatch component based on showStopWatch state */}
      {showStopWatch && <StopWatch />}
      {/* Button to toggle the visibility of StopWatch */}
      <button onClick={() => setShowStopWatch(!showStopWatch)}>
        TOGGLE STOPWATCH
      </button>
    </div>
  );
}


export default App;
