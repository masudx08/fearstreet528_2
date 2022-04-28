import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Admin, Zoom, Blog2 } from "./containers";
import MainContext from "./MainContext";

ReactDOM.render(
  <React.StrictMode>
    <MainContext>
      <BrowserRouter>
        <Routes>
          <Route path="/control" element={<Admin />} />
          <Route path="/call" element={<Zoom />} />
          <Route path="/" element={<App />}></Route>
          <Route path="/" element={<newdata />} />
          <Route path="/newdata" element={<Blog2 />}></Route>
        </Routes>
      </BrowserRouter>
    </MainContext>
  </React.StrictMode>,
  document.getElementById("root")
);
