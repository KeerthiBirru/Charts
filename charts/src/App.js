import React from "react";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";

// import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
const App = () => {
  return (
    <div>
      {/* <BrowserRouter> */}
      {/* <Router> */}
      {/* <Route path="/" exact Component={Topbar} /> */}
      {/* <Navbar/> */}
      <Topbar />
      {/* </Router> */}
      {/* </BrowserRouter> */}
      <Sidebar />
    </div>
  );
};

export default App;
