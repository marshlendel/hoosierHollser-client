import React, { Component } from "react";
import UserInfo from "./UserInfo";
import RoomList from "./RoomList";
class Sidebar extends Component {
  render() {
    return (
      <aside style={styles.sidebar}>
        <UserInfo />
        <h1 style={{...styles.children, ...styles.h1}}>Hoosier Holler</h1>
        <RoomList />
      </aside>
    );
  }
}


const styles: any = {
  sidebar: {
    backgroundImage: "linear-gradient(#FD297B, #FF5864)",
    color: "rgba(255, 255, 255, 0.8)",
    width: "12rem",
    padding: "1rem 0",
    display: "flex",
    flexDirection: "column",
  },
  children: {
    padding: "0 1rem",
  },

  h1: {
    color: "white",
    fontSize: "1.2rem",
    marginTop: "0",
  },

  bio: {
    display: "flex"
  }
};
export default Sidebar;
