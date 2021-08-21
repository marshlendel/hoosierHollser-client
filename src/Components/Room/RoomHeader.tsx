import React, { Component } from "react";
type props = {
  name: string,
  description: string
}

class RoomHeader extends Component <props, {}> {
  render() {
    return (
      <div style={styles.roomHeader}>
        <div>
          <h2 style={styles.h2}>#{this.props.name}</h2>
          <p style={styles.p}>{this.props.description}</p>
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
