import axios from "axios";
import React, { useState, useEffect } from "react";

const Character = ({ url }) => {

    const [character, setCharacter] = useState({});
    // const randomCharacter = Math.floor(Math.random() * 826) + 1;

    useEffect(() => {
        axios.get(url)
            .then(res => setCharacter(res.data))
    }, []);

    // console.log(character);

  return (
    <>
            <li>
            {/* {url} */}
            <h3>{character.name}</h3>
            <br />
            <p> <b>Status:</b> {character.status}</p>
            <img src={character.image} alt="" />
        
        </li>
    </>
  );
};

export default Character;
