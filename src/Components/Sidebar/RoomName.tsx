import React from "react";

type props = {
  setRoomInfo: any,
  roomName: string,
  name: string
  roomDescription: string,
  ownerId: string,
  id: string
}

const RoomName = (props: props) => {
  return (
    <li style={styles.li}>
      <span  onClick={() => props.setRoomInfo(props.roomName, props.roomDescription, props.ownerId, props.id)} style={styles.span}>#{props.name}</span>
    </li>
  );
};

const styles = {
  li: {
    marginBottom: "0.5rem",
  },

  span: {
    display: "block",
    color: "whitesmoke",
    textDecoration: "none",
  },
};

export default RoomName;
