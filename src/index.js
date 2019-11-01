import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import UserList from "./UserList";
import Preloader from "./Preloader";
import Button from "./Button";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false
    };
  }
  async getUsers() {
    this.setState({ loading: true });
    const response = await fetch("https://randomuser.me/api/?results=10");
    const usersJSON = await response.json();

    if (usersJSON && usersJSON.results) {
      this.setState({ users: usersJSON.results, loading: false });
    }
  }

  componentDidMount() {
    //this.getUsers();
  }
  render() {
    const { users, loading } = this.state;
    if (loading) return <Preloader />;
    return (
      <div>
        <Button handleClick={() => this.getUsers()} label={"Load"} />
        <div> {users && <UserList users={users} />}</div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
