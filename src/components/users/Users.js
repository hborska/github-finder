import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext; //destructuring from githubContext

  if (loading) {
    //rendering the spinner while page loads
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((
          user //passed down from App.js axios res
        ) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

//defining style for each user
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
