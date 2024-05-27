

import { useState, useEffect } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);

  useEffect(() => {

     const stopw=setInterval(()=>
        {
            setCount((prev)=>prev+1)
        },1000)

        function cleanupFunction() {
            clearInterval(stopw);
          }
          return cleanupFunction;
    
  },
   []);

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;
