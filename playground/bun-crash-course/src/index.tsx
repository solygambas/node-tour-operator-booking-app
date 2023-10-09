import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Hello world!</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

root.render(<App />);

// import fetchUser from "./githubAPI";

// (async () => {
//   const userData = await fetchUser("bradtraversy");
//   document.querySelector("p").innerHTML = JSON.stringify(userData);
// })();
