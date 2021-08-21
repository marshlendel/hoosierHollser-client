import React from "react";

type Props = {
  name: string;
}

const RoomName = (props: Props) => {
  return (
    <li style={styles.li}>
      <span style={styles.span}>#{props.name}</span>
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
