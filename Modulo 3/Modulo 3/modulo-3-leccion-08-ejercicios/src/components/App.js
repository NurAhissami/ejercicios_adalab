import '../stylesheets/App.css';
import {useState, useEffect} from 'react';
import fetchUsers from './services/RandomUser';
import UsersList from './UserList';
import '../stylesheets/App.css';
import Form from './Form';
import UserDescription from './UserDescription';
import ProductNotFound from './ProductNotFound';

import {Route, Switch} from 'react-router-dom';

function App() {
  const [usersData, setUsersData] = useState({results: []});
  const [loading, setLoading] = useState();
  // const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    setLoading(true);
    fetchUsers().then((data) => {
      setUsersData(data);
      setLoading(false);
    });
  }, []);

  const getUser = (products) => {
    const routerProductId = products.match.params.id;
    const productFound = products.find(
      (product) => product.id.value === routerProductId
    );
    if (productFound) {
      return <UserDescription product={productFound} />;
    } else {
      return <ProductNotFound />;
    }
  };

  const handleClick = (ev) => {
    fetchUsers().then((data) => {
      const filteredData = data.results.filter(
        (user) => user.location.country === ev.target.value
      );

      setUsersData({
        results: filteredData,
      });
    });
  };

  if (loading) return <p>loading...</p>;

  return (
    <div className="App">
      <Form onClick={handleClick} />
      <UsersList usersData={usersData} />

      <Switch>
        <Route path="/products">
          <UsersList usersData={usersData} />
        </Route>
        <Route path="/userlist/:id" render={getUser} />
      </Switch>
    </div>
  );
}

export default App;
