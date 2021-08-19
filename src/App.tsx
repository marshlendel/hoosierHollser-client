import React, { Component } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Room from "./Components/Room/Room";

class App extends Component {
  render() {
    return (
      <div style={styles}>
        <Sidebar />
        <Room />
      </div>
    );
  }
}

let styles = {
    display: "flex",
    alignItems: "stretch",
    height: "100vh"
}
export default App;
