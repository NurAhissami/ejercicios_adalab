const url = 'https://randomuser.me/api/?results=50';
const fetchUsers = () => {
  return fetch(url).then((response) => response.json());
};

export default fetchUsers;
