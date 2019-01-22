import React, { Component } from 'react';
import './App.css';
import Users from './Component/Users';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'Saran', age: 22 },
        { id: 2, name: 'Harish', age: 21 },
        { id: 3, name: 'Nermal', age: 20 }
      ]
    }
  }
  deleteUser = (index) => {
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({ users: users });
  }
  changeUsername = (id, e) => {
    const index = this.state.users.findIndex((user) => {
      return (user.id === id);
    })
    const user = Object.assign({}, this.state.users[index]);
    user.name = e.target.value;
    const users = Object.assign([], this.state.users);
    users[index] = user;
    this.setState({ users: users })
  }
  addUser = (e) => {
    e.preventDefault();
    const id = document.getElementById('a').value;
    const name = document.getElementById('b').value;
    const age = document.getElementById('c').value;
    var users = Object.assign([], this.state.users);
    users.push({ id: id, name: name, age: age });
    this.setState({ users: users });
  }
  render() {
    return (
      <div>
        <h1>Welcome Users!!</h1>
        <hr />
        <h2>Add User</h2>
        <div>
          <form>
            ID: <input name="id" id="a" /> <span /><span />
            Name: <input name="name" id="b" /> <span /><span />
            Age: <input name="age" id="c" /><span /><span /><br />
            <button onClick={this.addUser}>Add</button>
          </form>
        </div>
        <hr />
        <div>
          <h2>List of User</h2>
          <ul>
            {
              this.state.users.map((user, index) => {
                return (<Users ageProps={user.age} idProps={user.id}
                  key={index}
                  delEvent={this.deleteUser.bind(this, index)}
                  chngeName={this.changeUsername.bind(this, user.id)}
                >{user.name}</Users>)
              })
            }
          </ul>
        </div>
      </div>

    );
  }
}

export default App;
