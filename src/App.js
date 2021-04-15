import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  //Searching Github for search box input
  searchUsers = async (text) => {
    this.setState({ loading: true });

    console.log('Searching for user ' + text);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    console.log(res.data);
    this.setState({ users: res.data.items, loading: false }); //setting to data.items instead of data
  };

  //Clear users from the state
  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    const name = 'John Doe';
    const { users, loading } = this.state;

    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />

          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
