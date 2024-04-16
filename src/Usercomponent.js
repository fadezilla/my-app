import React, { useEffect, useState } from 'react';

function UserComponent() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const response = await fetch('https://api.noroff.no/user');
      const userData = await response.json();
      setUser(userData);
    }
    loadUser();
  }, []);

  return <div>{user ? user.name : 'Loading...'}</div>;
}