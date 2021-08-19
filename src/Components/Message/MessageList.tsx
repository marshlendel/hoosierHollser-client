import React from "react";
import Message from "./Message";

class MessageList extends React.Component {
  render() {
    return (
      <div style={styles}>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    );
  }
}

const styles: object = {
  marginTop: "1rem",
  backgroundColor: "white",
  flex: "1",
  paddingBottom: "1rem",
  overflowY: "scroll"
}

export default MessageList;
