import React, { Component } from "react";
import UserInfo from "./UserInfo";
import RoomList from "./RoomList";
import Room from "../Room/Room";
import { Route, Switch } from "react-router";

type props = {
  logOut: any
}

class Sidebar extends Component <props, {}>{
  render() {
    return (
      <>
      <aside style={styles.sidebar}>
        <UserInfo logOut={this.props.logOut}/>
        <h1 style={{...styles.children, ...styles.h1}}>Hoosier Holler</h1>
        <RoomList />
      </aside>
       <Switch>
       <Route exact path="/General">
         <Room name="General" description="Talk about anything and everything"/>
       </Route>
       <Route exact path="/Random">
       <Room name="Random" description="Whatever topics lol. So random"/>
       </Route>
       <Route exact path="/Fishers">
       <Room name="Fishers" description="A nice, unoffensive Indy suburb"/>
       </Route>
     </Switch>
     </>
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
