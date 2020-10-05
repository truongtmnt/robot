import React from "react";

const Card = ({ name, email, id }) => {
  
  return (
    <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 ">
      <img
        alt="robot1"
        src={`https://robohash.org/set_set5/${id}?size=200x200`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
