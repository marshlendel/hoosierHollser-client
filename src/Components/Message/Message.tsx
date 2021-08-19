import React, {Component} from 'react'
import faker from "faker"

class Message extends Component {
    render() {
        return(
            <div style={{paddingLeft: "1rem", display:"flex"}}className= "ui  comments">
            <div className="comment">
            <div className="avatar">
              <img alt="avatar" src={faker.image.avatar()} />
            </div>
            <div className="content">
              <a href="/" className="author">
                Marshall Brown
              </a>
              <div className="metadata">
                <span className="date">10 days ago</span>
              </div>
              <div className="text">
              loremecweckwnecjndjkcndcnwdc
              cecnwdecnsdklcnlskdnclksndcs\dcdc
              sdcsdcsndjkncsdjkncsjdncnsdckjnsdcsdcs dcnms dcnms dcsdc
              dcsdn cdsd
              </div>
              <div style={styles} className="metadata">
                <i className="thumbs up icon"></i>
                <p>5 Likes</p>
              </div>
            </div>
          </div>
          </div>
        )
    }
}

const styles = {
  color: "#FD297B"
}
export default Message