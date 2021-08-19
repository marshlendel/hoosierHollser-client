import React, { Component } from "react";

class RoomHeader extends Component {
  render() {
    return (
      <div style={styles.roomHeader}>
        <div>
          <h2 style={styles.h2}>#general</h2>
          <p style={styles.p}>Announcements and general chat</p>
        </div>
      </div>
    );
  }
}

const styles = {
  roomHeader: {
    backgroundColor: "#f3f3f3",
    borderBottom: "1px solid #ccc",
    height: "3rem",
    padding: "0 1rem",
    display: "flex",
    alignItems: "center",
  },

  h2: {
    fontSize: "1.1rem",
    margin: "0",
  },

  p: {
    color: " #999",
    margin: "0",
    fontSize: "0.8rem",
  },
};

export default RoomHeader;
