import Card from "../card/card.component";

const CardList = ({ characters }) => (
  <div className="flex flex-wrap flex-row items-center text-white ">
    {characters.map((character) => {
      return <Card key={character.id} character={character} />;
    })}
  </div>
);

export default CardList;
