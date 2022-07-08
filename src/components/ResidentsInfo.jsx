import React from "react";

const ResidentsInfo = ({character}) => {
  return (
    <div className="cards-info">
      <h3>{character.name}</h3>
      <br />
      <p>
        {character.status} - {character.species}
      </p>
      <p>
        {" "}
        <b>Type:</b> {character.type}
      </p>
      <p>
        {" "}
        <b>Origin:</b> {character.origin?.name}
      </p>
    </div>
  );
};

export default ResidentsInfo;
