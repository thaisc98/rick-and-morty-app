import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [characters, setCharacters] = useState([]);
  const [filterCharacters, setFilterCharacters] = useState(characters);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  console.log("rendered");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((response) => setCharacters(response.results));
  }, []);

  useEffect(() => {
    const newFilterCharacters = characters.filter((character) => {
      return character.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterCharacters(newFilterCharacters);
  }, [characters, searchField]);

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
};

export default App;
