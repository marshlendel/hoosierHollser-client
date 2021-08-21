import React, { Component } from "react";
import { Checkbox } from 'semantic-ui-react'
import "./signup.css";

type props = {
    signIn: any
}

class SignUp extends Component <props, {}> {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isAdmin: null,
    toggle: false,
  };

  toggleSign = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
    console.log(this.state.toggle);
  };

  toggleSignUpTop = () => { 
    return this.state.toggle ? (
      <div>
        <label data-autoFocus style={styles.label} htmlFor="FirstName">
          First Name
        </label>
        <input required style={styles.input} type="text" name="firstName" />
        <label style={styles.label} htmlFor="LastName">
          Last Name
        </label>
        <input required style={styles.input} type="text" name="LastName" />
      </div>
  ) : null
  }

 handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    this.props.signIn()
 }

  render() {
    return (
      <div style={styles.signIn}>
        <header style={styles.header}>
          <span style={styles.title}>
            <i className="fas fa-hashtag"></i>
            HoosierHoller
          </span>
        </header>
        <main style={styles.main}>
          <form onSubmit={(e) => this.handleSubmit(e)} style={styles.form}>
            <h1 style={styles.h1}>Welcome!</h1>
            {this.toggleSignUpTop()}
            <label style={styles.label} htmlFor="email">
              Email
            </label>
            <input  autoFocus style={styles.input} type="email" name="email" />
            <label style={styles.label} htmlFor="password">
              Password
            </label>
            <input  style={styles.input} type="password" name="password" />
            {this.state.toggle ? <Checkbox required style={{color: "#ffffffcc" }} label = "Are you an admin?" />: null}

            <button style={styles.button} type="submit">
              Sign In
            </button>
          </form>
          <div style={styles.blurb}>
            <h2 style={styles.h2}>
              Chat with your hoosier friends, or anyone really.
            </h2>
            <p>
              {this.state.toggle
                ? "Already got an account?"
                : "Don't have an account?"}{" "}
              <span onClick={this.toggleSign} style={styles.toggleText}>
                {this.state.toggle ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </div>
        </main>
      </div>
    );
  }
}

const styles: any = {
  signIn: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundImage: "linear-gradient(#FD297B, #FF5864)",
  },

  header: {
    backgroundColor: "white",
    minHeight: "4rem",
    padding: "0 2rem",
    margin: 0,
    display: "flex",
    alignItems: "center",
    boxShadow: "0 1px 1px rgba(0,0,0, .1)",
  },

  title: {
    color: "#FD297B",
    fontWeight: "400",
    textTransform: "uppercase",
    fontSize: "2rem",
  },

  main: {
    flex: "1",
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "1rem auto",
  },

  form: {
    width: "31.5%",
    minHeight: "10rem",
    BackgroundColor: "#ffffff4a",
    boxShadow: "rgb(0 0 0 / 35%) 0px 0px 35px",
    marginBottom: "2rem",
    borderRadius: "24px",
    minWidth: "200px",
  },

  label: {
    display: "block",
    textTransform: "uppercase",
    color: "#ffffffcc",
  },

  input: {
    width: "80%",
    fontSize: "1.5rem",
    color: "white",
    border: 0,
    backgroundColor: "inherit",
    borderBottom: "1.5px solid white",
    marginBottom: "1rem",
    textAlign: "center",
    padding: "0.5rem",
  },

  button: {
    display: "block",
    margin: "1rem auto",
    padding: "0.5rem 1rem",
    fontSize: "1.2rem",
    borderRadius: "1rem",
    backgroundColor: "inherit",
    border: "1px solid white",
    color: "white",
    width: "30%",
    whiteSpace: "nowrap",
    transition: "color 0.3s background-color 0.3s ease-in-out",
    cursor: "pointer",
  },

  blurb: {
    color: "#ffffffcc",
  },

  h1: {
    margin: "2rem",
    color: "white",
  },

  h2: {
    fontSize: "1.5rem",
    fontWeight: "normal",
  },

  toggleText: {
    cursor: "pointer",
    fontWeight: "bold",
  },
};
export default SignUp;
