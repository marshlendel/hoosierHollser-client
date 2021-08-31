import React, { Component } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import SignUp from "./Components/Auth/Signup";
import { BrowserRouter as Router } from "react-router-dom";
const name = localStorage.getItem("name")
const userId = localStorage.getItem("userId")
const isAdmin = localStorage.getItem("isAdmin")

type state = {
  sessionToken: any,
  id: string|null,
  firstName: string|null,
  lastName: string,
  isAdmin: string|null,
  isBanned: string|null
}

class App extends Component <{}, state> {
  state: state = {
    sessionToken: undefined,
    id: userId,
    firstName: name,
    lastName: "",
    isAdmin: isAdmin,
    isBanned: null

  };

  setUserInfo = async (id: string, firstName: string, lastName: string, isAdmin: string, isBanned: string) => {
    await this.setState({
      id: id,
      firstName: firstName,
      lastName: lastName,
      isAdmin: isAdmin,
      isBanned: isBanned
    })
    localStorage.setItem("name", firstName)
    localStorage.setItem("userId", id)
    localStorage.setItem("isAdmin", isAdmin)
  }


  updateLocalStorage = (newToken: string) => {
    if(newToken !== undefined) {
      localStorage.setItem("token", newToken)
      this.setState({sessionToken: newToken})
    }
  }

    logOut = () => {
      localStorage.clear()
      this.setState({sessionToken: undefined})
  }

  componentDidMount() {
    if(localStorage.getItem("token")) {
      this.setState({sessionToken: localStorage.getItem("token")})
    }
  }

  render() {
    return (
      <div>
        {this.state.sessionToken !== undefined ? (
          <div style={styles}>
          <Router>
            <Sidebar userId={this.state.id} firstName={this.state.firstName} lastName={this.state.lastName} isAdmin={this.state.isAdmin} isBanned={this.state.isBanned} sessionToken={this.state.sessionToken} logOut={this.logOut}/>
            </Router>
          </div>
        ) : (
          <div>
            <SignUp updateLocalStorage = {this.updateLocalStorage} setUserInfo={this.setUserInfo} />
          </div>
        )}
      </div>
    );
  }
}

let styles = {
  display: "flex",
  alignItems: "stretch",
  height: "100vh",
};
export default App;
