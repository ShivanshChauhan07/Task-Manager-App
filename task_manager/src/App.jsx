import { useState } from "react";
import Background from "./component/Background";
import Foreground from "./component/Foreground";

function App() {
  return (
    <div className="relative z-0 w-full h-screen bg-zinc-800 border border-zinc-800 select-none">
      <Background />
      <Foreground />
    </div>
  );
}

export default App;
