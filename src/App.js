import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      searchField: "",
    };
  }
  //how to get the list
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((response) =>
        this.setState(() => {
          return { characters: response.results };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { characters, searchField } = this.state;
    const { onSearchChange } = this;

    const filterCharacters = characters.filter((character) => {
      return character.name.toLocaleLowerCase().includes(searchField);
    });

    console.log(filterCharacters);

    return (
      <div className="bg-zinc-800">
        <h1 className="flex justify-center mt-10 mb-4 text-6xl font-display text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-yellow-400  to-green-900 ">
          Rick and Morty Characters
        </h1>
        <SearchBox
          className="characters-search-box"
          onChangeHandler={onSearchChange}
          placeholder="search characters"
        />
        <CardList characters={filterCharacters} />
      </div>
    );
  }
}

export default App;
