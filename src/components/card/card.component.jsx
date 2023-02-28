import { Component } from "react";
import alien from "../../assets/alien.png";

const longestName = (name) => {
  return name.length >= 10 ? name.slice(0, 16) : name;
};

class Card extends Component {
  render() {
    const { id, name, image, status, species } = this.props.character;
    return (
      <div
        key={id}
        className="rounded-lg  mx-6 my-6 relative justify-between hover:bg-gradient-to-r hover:from-green-500 hover:via-yellow-400 hover:to-green-900 hover:shadow-lg  hover:shadow-zinc-900"
      >
        <div className="rounded bg-zinc-900 p-2 transition ease-out duration-200  hover:scale-95">
          <img
            className="rounded object-cover md:h-full md:w-48 inline"
            alt={`character ${name}`}
            src={image}
          />
          <div className="flex flex-wrap items-center align-middle justify-center mx-2 my-2">
            <h2 className="text-lg font-bold">{longestName(name)}</h2>
            {species === "Human" ? (
              <div className="mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                  />
                </svg>
              </div>
            ) : (
              <div className="mx-2">
                <img className="w-6 h-6" src={alien} alt="alien" />
              </div>
            )}
          </div>
          <h2>{status}</h2>
        </div>
      </div>
    );
  }
}

export default Card;
