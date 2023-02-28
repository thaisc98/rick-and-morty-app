import { Component } from "react";
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    const { characters } = this.props;

    return (
      <div className="flex flex-wrap flex-row items-center text-white ">
        {characters.map((character) => {
          return <Card key={character.id} character={character} />;
        })}
      </div>
    );
  }
}

export default CardList;
