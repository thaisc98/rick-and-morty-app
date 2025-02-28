import "./App.css";
import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import { getData } from "./utils/data.utils";

export type Character = {
  id: React.Key;
  name: string;
  image: string;
  status: string;
  species: string;
}

export type Result = {
  results: Character[]
}


const App = () => {
  const [searchField, setSearchField] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filterCharacters, setFilterCharacters] = useState(characters);

  useEffect(() => {
    const fetchUser = async () =>{
      const url = searchField.length > 3
      ? `https://rickandmortyapi.com/api/character/?name=${searchField}`
      : "https://rickandmortyapi.com/api/character/"; // Default URL without search
      const responseCharacters = await getData<Result>(url)
      setCharacters(responseCharacters.results)
    }
    fetchUser();
  }, [searchField]);

  useEffect(() => {
    const newFilterCharacters = characters.filter((character) => {
      return character.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterCharacters(newFilterCharacters);
  }, [characters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

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
