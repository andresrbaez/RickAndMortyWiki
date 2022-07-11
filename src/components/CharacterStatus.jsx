import React from "react";

const CharacterStatus = ({ character }) => {
  if (character.status === "Alive") {
    return (
      <>
        <p>
          <span className="circle green"></span>
          {character.status} - {character.species}
        </p>
      </>
    );
  } else if (character.status === "Dead") {
    return (
      <>
        <p>
          <span className="circle red"></span>
          {character.status} - {character.species}
        </p>
      </>
    );
  } else {
    return (
      <>
        <p>
          <span className="circle gray"></span>
          {character.status} - {character.species}
        </p>
      </>
    );
  }
};

export default CharacterStatus;
