import {Link} from 'react-router-dom';

function User({name, city, picture, id}) {
  return (
    <li>
      <Link to={`./products/${id}`}></Link>
      <h2>{name}</h2>
      <img src={picture} />
      <p>{city}</p>
      <Link />
    </li>
  );
}

export default User;
