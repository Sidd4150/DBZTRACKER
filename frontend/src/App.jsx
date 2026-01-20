import { Routes, Route, Link } from "react-router-dom";

import Timeline from "./pages/Timeline";
import Home from "./pages/DBS_tracker_since_end";
import SuperReturn from "./pages/Super-return";
import GuessCharacter from "./pages/GuessCharacter";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/super-return" element={<SuperReturn />} />
      <Route path="/game" element={<GuessCharacter />} />

    </Routes>
  );
}

export default App;
