import React, {Component} from "react";

type props = {
  logOut: any,
  firstName: string|null
  
}

class UserInfo extends Component <props, {}> {
  render() {
    return (
      <div style={{...styles.children, ...styles.UserInfo}}>
        <div style={styles.Avatar}>
        <img style={styles.pic} src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="bio" />
        </div>
        <div style={styles.userName}>{this.props.firstName}</div>
          <span onClick={this.props.logOut}><i className="fas fa-lg fa-sign-out-alt"></i></span>
      </div>
    );
  }
}

const styles: any = {
    children: {
        padding: "0 1rem",
      },

      pic: {
        height: "40px",
        width: "40px",
        fontSize: "1rem",
        borderRadius: "20px",
        marginRight: "0.5rem"
      },

      UserInfo: {
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center",
      },
      
      userName:  {
        flex: "0.9"
      },

       a: {
        border: "0",
        padding: "0",
        backgroundColor: "transparent",
        color:" rgba(255, 255, 255, 0.6)",
        fontSize: "1.2rem",
        transition: "color 0.25s ease-out",
      }
}
export default UserInfo