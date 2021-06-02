import React from 'react';
import List from './List';

class App extends React.Component {
  render() {
    return (
      <div>
        <List promo="A" age="20" description="Hola soy sofia" />
        <List promo="B" name="María" age="21" description="hola" />
        <List promo="A" name="Lucia" age="22" />
      </div>
    );
  }
}

export default App;
