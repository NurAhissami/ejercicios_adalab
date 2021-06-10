import '../stylesheets/App.css';
import {useState, useEffect} from 'react';
import fetchUsers from './services/RandomUser';
import UsersList from './UserList';
import '../stylesheets/App.css';
import Form from './Form';

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

  // const getUser = (id) => {
  //   const user = usersData.results.find((user) => user.id.value === id);
  //   setCurrentUser(user);
  // };

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
    </div>
  );
}

export default App;
