import User from './User';
import {Link} from 'react-router-dom';

function UserList(props) {
  // { results:[] }
  const renderProducts = () => {
    return props.products.map((product) => {
      return (
        <li key={product.id}>
          <Link to={`./product/${product.id}`}>
            <ProductItem product={product} />
          </Link>
        </li>
      );
    });
  };
  if (!usersData?.results?.length) return <p>Sorry, no users</p>;
  return (
    <>
      {usersData.results.map((props) => (
        <ul>
          <User name={props.name.first} id={id}></User>
        </ul>
      ))}
    </>
  );
}

export default UserList;
