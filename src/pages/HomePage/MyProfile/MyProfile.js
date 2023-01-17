import React, { useState } from 'react'

const MyProfile = () => {
  const [profileName, setProfileName] = useState('john');
  return (
    <div>
      <h4>MyProfile</h4>
      <p>Profile Name: {profileName}</p>

      <button onClick={ () => {
        setProfileName('Steve');
      } }>Change Name</button>
    </div>
  );
}

export default MyProfile