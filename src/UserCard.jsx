import React from "react";

import UserAvatar from "./UserAvatar";
class UserCard extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <UserAvatar img={this.props.user.picture.large} />
        <div> {`${user.name.first} ${user.name.last}`}</div>
      </div>
    );
  }
}

export default UserCard;
