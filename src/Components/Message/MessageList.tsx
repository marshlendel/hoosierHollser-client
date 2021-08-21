import React from "react";
import Message from "./Message";

class MessageList extends React.Component {
  render() {
    return (
      <div style={styles}>
        <Message content="hey man that isn't cool" name="Marshall Brown" date="10 days ago" likes="10"/>
        <Message content="I don't care I do what I want" name="Kevin Smith" date="10 days ago" likes="0"/>
        <Message content="whatever bro" name="Marshall Brown" date="5 days ago" likes="3"/>
       
      </div>
    );
  }
}

const styles: object = {
  marginTop: "1rem",
  backgroundColor: "white",
  flex: "1",
  paddingBottom: "1rem",
  overflowY: "auto"
}

export default MessageList;
