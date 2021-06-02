import "../stylesheets/App.css";
import React from "react";
import RandomCat from "./RandomCat";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RandomCat />
      </div>
    );
  }
}

export default App;
