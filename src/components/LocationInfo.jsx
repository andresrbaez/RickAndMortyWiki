import React from 'react';

const LocationInfo = ({getInfo}) => {

    let populationInfo = getInfo.residents?.length


    return (
        <div className="location">
            <h1 className="title-size">{getInfo.name}</h1>
            <div className="title-info">
                <div>
                    <p>
                        <b className='gray-b'>Type: </b>{getInfo.type}
                    </p>
                </div>
                <div>
                    <p>
                        <b className='gray-b'>Dimension: </b>{getInfo.dimension}
                    </p>
                </div>
                <div>
                    <p>
                        <b className='gray-b'>Population: </b>{populationInfo}
                    </p>
                </div>
            </div>
      </div>
    );
};

export default LocationInfo;