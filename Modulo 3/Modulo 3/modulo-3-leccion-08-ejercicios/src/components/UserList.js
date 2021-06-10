import React from 'react';
import User from './User';

function UserList({usersData}) {
  // { results:[] }
  if (!usersData?.results?.length) return <p>Sorry, no users</p>;
  return (
    <>
      {/* <pre>{JSON.stringify(usersData.results, null, 2)}</pre> */}
      {usersData.results.map(({name, id}) => (
        <ul>
          <User name={name.first} id={id}></User>
        </ul>
      ))}
    </>
  );
}

export default UserList;
