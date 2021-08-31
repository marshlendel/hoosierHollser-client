import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./roomHeader.css"
import swal from "sweetalert";
import { Button, Modal, Form } from "semantic-ui-react";

type props = {
  ownerId: string|null,
  userId: string|null,
  isAdmin: string|null,
  sessionToken: any,
  updateDisplayRooms: any,
  updateRoom: any,
  roomId: string|null,
  name: string|null,
  description: string|null
}

type state = {
  owner: string|null,
  userId: string|null,
  isAdmin: string|null,
  open: boolean,
  roomName: string,
  description: string
}

class RoomHeader extends Component <props, state> {
  state: state = {
    owner: this.props.ownerId,
    userId: this.props.userId,
    isAdmin: this.props.isAdmin,
    roomName: "",
    description: "",
    open: false
  }

deleteRoom = () => {
  const url = `http://localhost:4000/room/delete/${this.props.roomId}`
  fetch(url, {
    method: "DELETE",
    headers: new Headers({
      "content-type": "application/json",
      Authorization: this.props.sessionToken,
  })
  })
  .then(res => res.json())
  .then(json => {
    this.props.updateDisplayRooms()
    if(json.message === "Can't delete someone else's room"){
      swal({ title: json.message, icon: "error" })
    }
  })
  .catch(err => console.log(err))
}

editRoom = () => {
  const reqBody = {
    name: this.state.roomName,
    description: this.state.description
  }

  const url = `http://localhost:4000/room/edit/${this.props.roomId}`
  console.log(url)
  fetch(url, {
    method: "PUT",
    body: JSON.stringify(reqBody),
    headers: new Headers({
      "content-type": "application/json",
      Authorization: this.props.sessionToken,
  })
  })
  .then(res => res.json())
  .then(json => {
    this.props.updateRoom(this.state.roomName, this.state.description)
    this.props.updateDisplayRooms()
    if (json.message === "Room updated") {
      this.setState({ open: false });
      this.setState({roomName: "", description: "" })   
    } else {
      swal({ title: json.message, icon: "error" });
    }
  })
  .catch(err=> console.log(err))
  localStorage.setItem("description", this.state.description)
}

  render() {
    return (
      <>
      <div className="header-parent" style={{...styles.roomHeader, ...styles.flex}}>
        <div>
          <h2 style={styles.h2}>#{localStorage.getItem("roomName")}</h2>
          <p style={styles.p}>{localStorage.getItem("description")}</p>
        </div>
        
        <div className="icon-container" style={styles.flex}>
        <div className="headerIcons" style={styles.hidden}>
        <Modal
              onClose={() => this.setState({ open: false })}
              onOpen={() => this.setState({ open: true })}
              open={this.state.open}
              trigger={
                <span>
                   <i className="fas fa-2x fa-edit"></i>
                </span>
              }
            >
              <Modal.Header>Edit Room</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Form onSubmit={ (e) => {
                    e.preventDefault()
                    this.editRoom()}
                  }>
                    <Form.Field>
                      <label>Room Name</label>
                      <input
                        required
                        value={this.state.roomName}
                        onChange={(e) =>
                          this.setState({ roomName: e.target.value })
                        }
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
        <Link to="/">
        <div onClick={this.deleteRoom} className="headerIcons" style={{...styles.hidden, ...styles.margin}}>
        <i className="fas fa-2x fa-trash-alt"></i>
        </div>
        </Link>
        </div>     
      </div>
      </>
    );
  }
}

const styles = {
  roomHeader: {
    backgroundColor: "#f3f3f3",
    borderBottom: "1px solid #ccc",
    height: "3rem",
    padding: "0 1rem",
    display: "flex",
    alignItems: "center",
  },

  margin: {
    marginLeft: "1rem"
  },

  h2: {
    fontSize: "1.1rem",
    margin: "0",
  },

  p: {
    color: " #999",
    margin: "0",
    fontSize: "0.8rem",
  },

  flex: {
    display: "flex",
    justifyContent: "space-between"
  },

  hidden: {
    display: "none",
    transition: "color 0.3s ease-in-out",
    cursor: "pointer"
  }
};

export default RoomHeader;
