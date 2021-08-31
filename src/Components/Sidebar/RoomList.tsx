import React, { Component } from "react";
import swal from "sweetalert";
import { Button, Modal, Form } from "semantic-ui-react";
import "./roomList.css";

type props = {
  toggle: boolean,
  sessionToken: string,
  displayRooms: any,
  updateDisplayRooms: any,
  roomList: any
}

type state = {
  toggle: boolean,
  open: boolean,
  roomName: string,
  description: string
}

class RoomList extends Component <props, state> {
  state: state = {
    toggle: false,
    open: false,
    roomName: "",
    description: "",
  };

  showArrow = () => {
    return (
      <i className={`fas fa-angle-${this.props.toggle ? "down" : "right"}`}></i>
    )
  };


  addRoom = (e:React.FormEvent) => {
    e.preventDefault();
    const url = `http://localhost:4000/room/create`;
    const reqBody = {
      name: this.state.roomName,
      description: this.state.description,
      isPrivate: 0,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: new Headers({
        "content-type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.message !== "Room successfully created") {
          swal({ title: json.message, icon: "error" });
        } else {
          this.setState({ open: false });
          this.props.updateDisplayRooms()
        }
      })
      .catch((err) => console.log(err));
      this.setState({roomName: "", description: ""})
  };

  render() {
    return (
      <>
        <nav style={{ ...styles.children, ...styles.nav }}>
          <div style={styles.div}>
            <h2 style={styles.h2} onClick={this.props.displayRooms}>
              Rooms {this.showArrow()}
            </h2>
            <Modal
              onClose={() => this.setState({ open: false })}
              onOpen={() => this.setState({ open: true })}
              open={this.state.open}
              trigger={
                <span>
                  <i className="fas fa-lg fa-plus-circle"></i>
                </span>
              }
            >
              <Modal.Header>Create Room</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Form onSubmit={(e) => this.addRoom(e)}>
                    <Form.Field>
                      <label>Room Name</label>
                      <input
                        required
                        value={this.state.roomName}
                        onChange={(e) =>
                          this.setState({ roomName: e.target.value })
                        }
                        placeholder="Room Name"
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Description</label>
                      <input
                        required
                        value={this.state.description}
                        onChange={(e) =>
                          this.setState({ description: e.target.value })
                        }
                        placeholder="description of the room..."
                      />
                    </Form.Field>
                    <Button type="submit" content="Submit" color="green" />
                    <Button
                      color="black"
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ open: false });
                      }}
                    >
                      Cancel
                    </Button>
                  </Form>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </div>
          <ul style={styles.ul}>{this.props.toggle && this.props.roomList}</ul>
        </nav>
      </>
    );
  }
}

const styles: any = {
  children: {
    padding: "0 1rem",
  },

  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  h2: {
    fontSize: "1rem",
    marginBottom: "0",
    cursor: "pointer",
  },

  ul: {
    listStyle: "none",
    marginLeft: "0",
    paddingLeft: "0",
  },

  nav: {
    overflowY: "auto",
  },

  cursor: {},
};

export default RoomList;
