import React, { Component } from "react";
import RoomName from "./RoomName";

class RoomList extends Component {
  render() {
    return (
      <nav style={{...styles.children, ...styles.nav}}>
        <h2 style={styles.h2}>Rooms</h2>
        <ul style={styles.ul}>
          <RoomName />
          <RoomName />
          <RoomName />
          <RoomName />
          <RoomName />
          <RoomName />
          <RoomName />
          <RoomName />
          <RoomName />
          <RoomName />
          <RoomName />
          <RoomName />
          <RoomName />
          <RoomName />
          <RoomName />
        </ul>
      </nav>
    );
  }
}

const styles: any = {
  children: {
    padding: "0 1rem",
  },

  h2: {
    fontSize: "1rem",
    marginBottom: "0"
  },

  ul: {
    listStyle: "none",
    marginLeft: "0",
    paddingLeft: "0",
  },

  nav: {
    overflowY: "scroll"
  }
};

export default RoomList