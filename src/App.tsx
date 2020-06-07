import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./features/layout/layout";
import Routes from "./routes/routes";
import "./assets/styles/app.scss";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
