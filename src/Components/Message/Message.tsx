import React, {Component} from 'react'
import faker from "faker"

type props = {
  content: string,
  name: string,
  date: string,
  likes: string
}

class Message extends Component <props, {}> {
    render() {
      return(
        <div style={{paddingLeft: "1rem", display:"flex"}}className= "ui  comments">
        <div className="comment">
        <div className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </div>
        <div className="content">
          <a href="/" className="author">
            {this.props.name}
          </a>
          <div className="metadata">
            <span className="date" style={styles.time}>{this.props.date}</span>
          </div>
          <div className="text">
         {this.props.content}
          </div>
          <div style={styles.thumbs} className="metadata">
            <i className="thumbs up icon"></i>
            <p>{this.props.likes} Likes</p>
          </div>
        </div>
      </div>
      </div>
    )
}
}

const styles = {
thumbs: {
color: "#666666"
},

time: {
color: " rgb(0 0 0 / 62%)"
}
}
export default Message