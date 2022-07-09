import React from "react";

const ResidentsInfo = ({character}) => {
  return (
    <div className="cards-info">
      <h3>{character.name}</h3>
      <br />
      <p>
        {character.status} - {character.species}
      </p>
      <p className="gray-p">
        {" "}
        Origin
      </p>
      <p>
        {character.origin?.name}
      </p>
      <p className="gray-p">
        {" "}
        Episodes where appear
      </p>
      <p>
        {character.episode?.length}
      </p>
    </div>
  );
};

export default ResidentsInfo;
