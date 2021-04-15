import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1>About This App:</h1>
      <p>
        This app allows you to search any Github user. Simply type in the name
        of a Github user and click search, and it will pull up any user with a
        similar username or with that in their bio. Click clear to clear your
        search. Click on a specific user to pull up their info in the app.
      </p>
      <p>Version: 1.0.0</p>
    </Fragment>
  );
};

export default About;
