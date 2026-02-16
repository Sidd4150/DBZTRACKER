
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Nav from "./Nav";
import Footer from "./Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="bg-[url('/bg-dbz-balls.jpg')] bg-cover">
      <Nav />

      <App />
    </div>
    <Footer />
  </BrowserRouter>
);
