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
        <div>
            <div className='input-div'>
                <input type="text" size={70} placeholder='escriba id' value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
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