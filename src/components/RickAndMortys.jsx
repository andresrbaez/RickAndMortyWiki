import axios from "axios";
import React, { useState, useEffect } from "react";
import Character from "./Characters";

const RickAndMortys = () => {
  const [getInfo, setGetInfo] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const random = Math.floor(Math.random() * 126) + 1;

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => {
        setGetInfo(res.data);
      });
  }, []);

  const searchType = (e) => {
    e.preventDefault();
    axios
      .get(`https://rickandmortyapi.com/api/location/${searchValue}`)
      .then((res) => setGetInfo(res.data));
  };

  let populationInfo = getInfo.residents?.length

  return (
    <div className="principal-div">
      <div className="search-div">
        <form className="form" onSubmit={searchType}>
          <input
            type="text"
            required
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <label className="lbl-name">
            <span className="txt-name">Type ID location</span>
          </label>
        </form>
      </div>
      <h1 className="title-size">{getInfo.name}</h1>
      <div className="title-info">
        <div>
          <p>
            <b>Type: </b>{getInfo.type}
          </p>
        </div>
        <div>
          <p>
            <b>Dimension: </b>{getInfo.dimension}
          </p>
        </div>
        <div>
          <p>
            <b>Population: </b>{populationInfo}
          </p>
        </div>
      </div>

      <h1 className="title-size">Residents</h1>

      <ul>
        {getInfo.residents?.map((url) => (
          <Character url={url} key={url} />
        ))}
      </ul>
    </div>
  );
};

export default RickAndMortys;
