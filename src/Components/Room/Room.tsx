import React, { Component } from "react";
import RoomHeader from "./RoomHeader";
import MessageList from "../Message/MessageList";
import MessageForm from "../Message/MessageForm";

class Room extends Component {
  render() {
    return (
        <div style={styles}>
        <RoomHeader />
        <MessageList />
        <MessageForm />

        </div>
    )
  }
}

const styles: any = {
  flex: "1",
  display: "flex",
  flexDirection: "column"
}

export default Room