import React, { Component } from "react";
import UserInfo from "./UserInfo";
import RoomList from "./RoomList";
import Room from "../Room/Room";
import { Route, Switch } from "react-router";
import {Link} from "react-router-dom"
import RoomName from "./RoomName";
const roomName = localStorage.getItem("roomName")
const description = localStorage.getItem("description")
const ownerId = localStorage.getItem("ownerId")

type state = {
  name: string|null,
  description: string|null,
  ownerId: string|null,
  roomId: string|null,
  roomList: any,
  toggle: boolean
}

type props = {
  userId: string|null,
  firstName: string|null,
  lastName: string|null,
  isAdmin: string|null,
  isBanned: string|null,
  sessionToken: string,
  logOut: any
  
}

class Sidebar extends Component <props, state> {
  state: state ={
    name: roomName,
    description: description,
    ownerId: ownerId,
    roomId: null,
    roomList: null,
    toggle: false
  }

  toggler = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  
  displayRooms = () => {
    this.toggler();
    fetch(`http://localhost:4000/room/`, {
      method: "GET",
      headers: new Headers({
        "content-type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          roomList: json.rooms.map((room: any) => {
            return (
              <>
                <Link key={room.id} to={`/${room.name}`}>
                  <RoomName
                    name={room.name}
                    roomName={room.name}
                    roomDescription={room.description}
                    ownerId={room.owner}
                    id={room.id}
                    setRoomInfo={this.setRoomInfo}
                  />
                </Link>
              </>
            );
          }),
        });
      })
      .catch((err) => console.log(err));
  };

  updateDisplayRooms = () => {
    fetch(`http://localhost:4000/room/`, {
      method: "GET",
      headers: new Headers({
        "content-type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          roomList: json.rooms.map((room: any) => {
            return (
              <>
                <Link key={room.id} to={`/${room.name}`}>
                  <RoomName
                    name={room.name}
                    roomName={room.name}
                    roomDescription={room.description}
                    ownerId={room.owner}
                    id={room.id}
                    setRoomInfo={this.setRoomInfo}
                  />
                </Link>
              </>
            );
          }),
        });
      })
      .catch((err) => console.log(err));
  }

  
  setRoomInfo = (name: string, description: string, ownerId:string, id:string) => {
    this.setState({name: name, description: description, roomId: id})
    localStorage.setItem("roomName", name)
    localStorage.setItem("description", description)
    localStorage.setItem("ownerId", ownerId)
    localStorage.setItem("roomId", id)
  }

  updateRoom = (name: string, description: string) => {
    localStorage.setItem("roomName", name)
    localStorage.setItem("description", description)

  }

  render() {
    return (
      <>
      <aside style={styles.sidebar}>
        <UserInfo firstName={this.props.firstName} logOut={this.props.logOut} />
        <h1 style={{...styles.children, ...styles.h1}}>Hoosier Holler</h1>
        <RoomList toggle={this.state.toggle} sessionToken={this.props.sessionToken} displayRooms={this.displayRooms} updateDisplayRooms={this.updateDisplayRooms} roomList={this.state.roomList}/>
      </aside>
      <Switch>
        <Route exact path={`/${this.state.name}`}>
          <Room sessionToken={this.props.sessionToken} updateRoom={this.updateRoom} roomId={this.state.roomId} isAdmin={this.props.isAdmin} userId={this.props.userId} ownerId={this.state.ownerId} name={this.state.name} description={this.state.description} updateDisplayRooms={this.updateDisplayRooms} />
        </Route> 
        <Route exact path="/">

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