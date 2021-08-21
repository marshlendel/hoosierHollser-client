import React, { Component } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import SignUp from "./Components/Auth/Signup";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  state = {
    signedIn: false,
  };

  signIn = () => {
    this.setState({
      signedIn: true,
    });
  }

    logOut = () => {
      this.setState({
        signedIn: false
    })
  }


  render() {
    return (
      <div>
        {this.state.signedIn ? (
          <div style={styles}>
          <Router>
            <Sidebar logOut={this.logOut}/>
            </Router>
          </div>
        ) : (
          <div>
            <SignUp signIn = {this.signIn} />
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
