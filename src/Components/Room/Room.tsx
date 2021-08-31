import React, { Component } from "react";
import RoomHeader from "./RoomHeader";
import MessageList from "../Message/MessageList";
import MessageForm from "../Message/MessageForm";

type props = {
  updateRoom: any,
  name: string|null,
  updateDisplayRooms: any,
  sessionToken: string|null,
  roomId: string|null,
  isAdmin: string|null,
  ownerId: string|null,
  userId: string|null,
  description: string|null
}

class Room extends Component <props, {}> {
  render() {
    return (
        <div style={styles}>
        <RoomHeader  updateRoom={this.props.updateRoom} updateDisplayRooms={this.props.updateDisplayRooms} sessionToken={this.props.sessionToken} roomId={this.props.roomId} isAdmin={this.props.isAdmin} ownerId={this.props.ownerId} userId={this.props.userId} name={this.props.name} description={this.props.description}/>
        <MessageList />
        <MessageForm />

        </div>
    )
  }
}

const styles: object = {
  flex: "1",
  display: "flex",
  flexDirection: "column"
}

export default Room