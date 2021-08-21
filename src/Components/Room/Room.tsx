import React, { Component } from "react";
import RoomHeader from "./RoomHeader";
import MessageList from "../Message/MessageList";
import MessageForm from "../Message/MessageForm";

type props = {
  name: string,
  description: string
}

class Room extends Component <props, {}> {

  render() {
    return (
        <div style={styles}>
        <RoomHeader name={this.props.name} description={this.props.description}/>
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