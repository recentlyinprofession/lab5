import React from "react";

class UserAvatar extends React.Component {

  render() {
   
    return <img src={this.props.img} alt="Avatar" />;
  }
}

export default UserAvatar;