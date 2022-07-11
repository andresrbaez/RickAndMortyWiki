import React from "react";
import { useState } from "react";
import CharacterStatus from "./CharacterStatus";

const ResidentsInfo = ({character}) => {

  // const [status, setStatus] = useState("");
  // console.log(character.status);


  return (
    <div className="cards-info">
      <h3>{character.name}</h3>
      <br />
      <CharacterStatus character={character} />
      {/* <p className="circle-green">
        {character.status} - {character.species}
      </p> */}
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
