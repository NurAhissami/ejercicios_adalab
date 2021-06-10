import React from 'react';

function User({name, city, picture}) {
  return (
    <li>
      {/* <a href={`/user/${id.value}`}> */}
      <h2>{name}</h2>
      <img src={picture} />
      <p>{city}</p>
      {/* <p>{JSON.stringify(id)}</p> */}
      {/* </a> */}
    </li>
  );
}

export default User;
