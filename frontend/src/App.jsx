import { Routes, Route, Link } from "react-router-dom";

import Timeline from "./pages/Timeline";
import Home from "./pages/DBS_tracker";
import SuperReturn from "./pages/Super-return";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/super-return" element={<SuperReturn />} />
    </Routes>
  );
}

export default App;
