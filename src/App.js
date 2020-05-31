import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, search } = this.state;
    const filter = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <div>
          <input
            type="search"
            placeholder="Search Monsters"
            onChange={(e) => this.setState({ search: e.target.value })}
          />
        </div>
        <CardList monsters={filter} />
      </div>
    );
  }
}

export default App;
