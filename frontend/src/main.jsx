
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Nav from "./Nav";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Nav />

    <App />
  </BrowserRouter>
);
