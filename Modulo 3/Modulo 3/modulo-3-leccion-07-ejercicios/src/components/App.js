import '../stylesheets/App.css';
import Form from './Form';
import Card from './Card';
import {useState} from 'react';

function App() {
  const [forminput, setForminput] = useState({
    name: '',
    textarea: '',
    lenguage: '',
    gender: '',
    age: '',
  });

  const handleInputData = (ev) => {
    setForminput({
      ...forminput,
      [ev.target.name]: ev.target.value,
    });
  };

  return (
    <div className="App">
      <Form onChange={handleInputData} />
      <Card
        name={forminput.name}
        text={forminput.textarea}
        lenguage={forminput.lenguage}
        gender={forminput.gender}
        age={forminput.age}
      />
    </div>
  );
}

export default App;
