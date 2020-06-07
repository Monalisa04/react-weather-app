import React from "react";
import Navbar from "../navbar/navbar";

const Layout = (props: any) => (
  <div className="app">
    <Navbar />

    <div className="app-content">
      <div className="app-content-body">{props.children}</div>
    </div>
  </div>
);

export default Layout;
