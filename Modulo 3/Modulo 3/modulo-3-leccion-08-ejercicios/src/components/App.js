import '../stylesheets/App.css';

import fetchUsers from './services/RandomUser';
import UsersList from './UserList';
import {useState, useEffect} from 'react';

function App() {
  const [usersData, setUsersData] = useState({results: []});

  useEffect(() => {
    fetchUsers().then((data) => setUsersData(data));
  });

  const handleClick = (ev) => {
    fetchUsers().then((data) => {
      const filteredData = data.results.filter(
        (user) => user.location.country === ev.target.value
      );

      setUsersData({
        usersData: usersData.results,
        filteredData,
      });
    });
  };
  return (
    <div className="main">
      <form onClick={handleClick}>
        <fieldset>
          <label htmlFor="Germany">
            <input type="checkbox" name="Germany" value="Germany" />
            Germany
          </label>
          <label htmlFor="Norway">
            <input type="checkbox" name="Norway" value="Norway" />
            Norway
          </label>
          <label htmlFor="United States">
            <input type="checkbox" name="United States" value="United States" />
            United States
          </label>
          <label htmlFor="Denmark">
            <input type="checkbox" name="Denmark" value="Denmark" />
            Denmark
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="male">
            <input type="checkbox" name="male" value="male" />
            male
          </label>
          <label htmlFor="female">
            <input type="checkbox" name="female" value="male" />
            female
          </label>
        </fieldset>
      </form>
      <UsersList usersData={usersData} />
    </div>
  );
}

/*class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleFetch = this.handleFetch.bind(this);
    this.state = {
      usersData: [],
    };
  }
  handleFetch(ev) {
    ev.preventDefault();
    fetchUsers().then((data) => {
      const filteredData = data.results.filter(
        (user) => user.location.country === ev.target.value
      );
      // .filter((user) => user.gender === ev.target.value);
      this.setState({
        usersData: filteredData,
      });
    });
  }

  render() {
    return (
      <div className="main">
        <form onClick={this.handleFetch}>
          <fieldset>
            <label htmlFor="Germany">
              <input type="checkbox" name="Germany" value="Germany" />
              Germany
            </label>
            <label htmlFor="Norway">
              <input type="checkbox" name="Norway" value="Norway" />
              Norway
            </label>
            <label htmlFor="United States">
              <input
                type="checkbox"
                name="United States"
                value="United States"
              />
              United States
            </label>
            <label htmlFor="Denmark">
              <input type="checkbox" name="Denmark" value="Denmark" />
              Denmark
            </label>
          </fieldset>

          <fieldset>
            <label htmlFor="male">
              <input type="checkbox" name="male" value="male" />
              male
            </label>
            <label htmlFor="female">
              <input type="checkbox" name="female" value="male" />
              female
            </label>
          </fieldset>
          {/* <button onClick={this.handleFetch}>Search</button> */ /*}
        </form>
        <UsersList usersData={this.state.usersData} />
      </div>
    );
  }
}*/

export default App;
