import React from 'react';
import User from './User';

function UserList(props) {
  const mapUsers = props.usersData.map((user) => user.name.first);
  return (
    <ul>
      <User name={mapUsers} />
    </ul>
  );
}

export default UserList;
