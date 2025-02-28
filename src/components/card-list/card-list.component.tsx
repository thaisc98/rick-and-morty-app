import Card from "../card/card.component";
import { Character } from "../../App";

type CardListProps = {
  characters: Character[]
}

const CardList = ({ characters }: CardListProps) => (
  <div className="flex flex-wrap flex-row items-center text-white m-auto place-content-center">
    {characters.map((character) => {
      return <Card key={character.id} character={character} />;
    })}
  </div>
);

export default CardList;
