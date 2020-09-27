import React from "react";
import "./styles.css";
import Fragment from "./components/Fragment";
import Table from "./components/Table";
import ParentComponent from "./components/ParentComponent";
export default function App() {
  return (
    <div className="App">
      {/* <Fragment/> */}
      {/* <Table /> */}
      <ParentComponent />
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
