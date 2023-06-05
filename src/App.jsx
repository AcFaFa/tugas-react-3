import { useState } from "react";
import Header from "./assets/Header";
import Dashboards from "./assets/Dashboards";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Header />
      <Dashboards />
    </div>
  );
}

export default App;
