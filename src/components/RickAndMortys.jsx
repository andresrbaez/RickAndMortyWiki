import axios from 'axios';
import React, { useState, useEffect } from 'react';

const RickAndMortys = () => {

    const [getInfo, setGetInfo] = useState({});
    const [searchValue, setSearchValue] = useState("")
    const random = Math.floor(Math.random() * 126) + 1

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => {
                setGetInfo(res.data);
              });
    }, []);

    const searchType = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${searchValue}`)
            .then(res => setGetInfo(res.data))
    }

    console.log(getInfo);



    return (
        <div className='principal-div'>

            <div className='search-div'>
                <form className="form">
                <input type="text" required value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
                <label className='lbl-name'>
                    <span className="txt-name">
                        Escriba ID
                    </span>
                </label>
                </form>
                <button onClick={searchType} className='btn-RNM'>Search</button>             
            </div>

                <h1>{getInfo.name}</h1>
                <ul>
                        {getInfo.residents?.map((url) => (
                            <li>
                                {url}
                            </li>
                        ))}
                </ul>
        </div>
    );
};

export default RickAndMortys;