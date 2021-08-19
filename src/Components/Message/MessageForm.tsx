import React, { Component } from "react";

class MessageForm extends Component {
  state = { text: "" };

  handleInput = (e:React.FormEvent) => {
    e.preventDefault();
    console.log(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <form style={styles.MessageForm} onSubmit={(e: React.FormEvent) => this.handleInput(e)}>
        <div style={styles.chatIcon}>
          <i className="fas fa-comment-alt"></i>
        </div>
        <input
            style={styles.formInput}
          onChange={(e) => this.setState({ text: e.target.value })}
          autoFocus
          value={this.state.text}
          type="text"
          placeholder="Type a message..."
        />
        <button style={styles.formButton} type="submit">
        <i className="far fa-paper-plane" title="Send"></i>
        </button>
      </form>
    );
  }
}

const styles = {
  MessageForm: {
    backgroundColor: "white",
    height: "3rem",
    display: "flex",
    alignItems: "stretch",
    border: "2px solid #FF655B",
    borderRadius: "0.5rem",
    margin: "0.25rem",
    padding: "0",
  },

  chatIcon: {
    display: "flex",
    borderRadius: "0.5rem",
    alignItems: "center",
    backgroundColor: "white",
    color: "#FF655B",
    padding: "0 0.5rem",
    fontSize: "1.2rem",
  },

  formInput: {
    flex: "1",
    fontSize: "1.2rem",
    border: "0",
  },

  formButton: {
    fontSize: "1.5rem",
    backgroundColor: "#FD297B",
    color: "white",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    borderTopRightRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem",
    border: " 1px solid white",
  },
};

export default MessageForm;
