import React, { useEffect, useState } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';

import '@aws-amplify/ui-react/styles.css'; // Import the default styling

Amplify.configure(awsconfig);

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the Blog, {user ? user.username : 'Guest'}!</p>
        {/* Add your blog content here */}
      </header>
    </div>
  );
};

export default withAuthenticator(App);
