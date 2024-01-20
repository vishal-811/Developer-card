import React from 'react';

const Card = ({ data }) => {
    console.log(data)
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          
            <>
             <h1>Developer Card</h1>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>{item.interest}</p>
              <p>{item.link}</p>
            </>
        </div>
      ))}
    </>
  );
}

export default Card;
