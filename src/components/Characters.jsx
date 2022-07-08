import axios from "axios";
import React, { useState, useEffect } from "react";

const Character = ({ url }) => {

    const [character, setCharacter] = useState({});
    // const randomCharacter = Math.floor(Math.random() * 826) + 1;

    useEffect(() => {
        axios.get(url)
            .then(res => setCharacter(res.data))
    }, []);

    console.log(character);


  return (
    <>
            <div className="cards">
                <div className="cards-img">
                    <img src={character.image} alt="" />
                </div>
                <div className="cards-info">
                    <h3>{character.name}</h3>
                    <br />
                    <p>{character.status} - {character.species}</p>
                    <p> <b>Type:</b> {character.type}</p>
                    <p> <b>Origin:</b> {character.origin?.name}</p>

                </div>
            </div>
    </>
  );
};

export default Character;
