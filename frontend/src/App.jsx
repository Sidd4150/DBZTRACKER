import { Routes, Route, Link } from "react-router-dom";

import Timeline from "./Timeline";
import Home from "./DBS_tracker";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timeline" element={<Timeline />} />
    </Routes>
  );
}

export default App;
