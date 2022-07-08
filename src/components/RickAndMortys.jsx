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
            <span className="txt-name">Escriba ID</span>
          </label>
        </form>
      </div>
      <h1>{getInfo.name}</h1>
      <div className="title-info">
        <div>
          <p>
            <b>Type: {getInfo.type}</b>
          </p>
        </div>
        <div>
          <p>
            <b>Dimension: {getInfo.dimension}</b>
          </p>
        </div>
        <div>
          <p>
            <b>Population: {populationInfo}</b>
          </p>
        </div>
      </div>

      <h1>Residents</h1>

      <ul>
        {getInfo.residents?.map((url) => (
          <Character url={url} key={url} />
        ))}
      </ul>
    </div>
  );
};

export default RickAndMortys;
