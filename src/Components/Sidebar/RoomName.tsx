import React from "react";

const RoomName = () => {
  return (
    <li style={styles.li}>
      <span style={styles.span}>#general</span>
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
