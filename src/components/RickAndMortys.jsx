import axios from "axios";
import React, { useState, useEffect } from "react";
import Character from "./Characters";
import LocationInfo from "./LocationInfo";

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
      .then((res) => {
        setGetInfo(res.data);
        reset();
      });
  };

//   let populationInfo = getInfo.residents?.length


  const [page, setPage] = useState(1)
  const charactersPerPage = 10
  const lastIndex = page * charactersPerPage
  const firstIndex = lastIndex - charactersPerPage
  const charactersPaginated = getInfo.residents?.slice(firstIndex, lastIndex)

  const lastPage = Math.ceil(getInfo.residents?.length / charactersPerPage)

  const numbers = [];
  for(let i = 1; i <= lastPage; i++){
    numbers.push(i)
  }

  // console.log(numbers)

  const[ locationSuggestions, setLocationSuggestions ] = useState([])

  const reset = () => {
    setSearchValue("");
  }


  useEffect(() => {
    if(searchValue !== ""){
      axios.get(`https://rickandmortyapi.com/api/location/?name=${searchValue}`)
        .then(res => setLocationSuggestions(res.data.results))
    } else {
      setLocationSuggestions([])
      reset();
    }
  }, [searchValue]);

  return (
    <div className="principal-div">
      <div className="search-div">
        <form className="form" onSubmit={searchType}>
          <input
            type="text"
            required
            id="searchValue"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />


          <label className="lbl-name">
            <span className="txt-name">Type ID location</span>
          </label>
        </form>
      </div>
        {locationSuggestions.map(location => (
        <div className="searchLocation" onClick={() => setGetInfo(location)}>{location.name}</div>
      ))}
      <LocationInfo getInfo={getInfo}/>

      <h1 className="title-size">Residents</h1>

      <ul>
        {charactersPaginated?.map((url) => (
          <Character url={url} key={url} />
        ))}
      </ul>

      <div className="btn-pagination">
        <button 
        className="btn-numbers" 
        onClick={() => setPage(page-1)} 
        disabled={page === 1}
        >
          <i className='bx bx-chevron-left icon-size'></i>
        </button>

        <button 
        className="btn-numbers" 
        onClick={() => setPage(page+1)} 
        disabled={page === lastPage}
        >
          <i className='bx bx-chevron-right icon-size'></i>
        </button>
      </div>

    </div>
  );
};

export default RickAndMortys;
