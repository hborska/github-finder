import React, { Component } from 'react';

export class User extends Component {
  componentDidMount() {
    //fires off when component loads
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      // pulling from Github API
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props;

    return <div>Hi {name}</div>;
  }
}

export default User;
