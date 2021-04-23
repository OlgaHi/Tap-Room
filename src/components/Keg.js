import React from "react";

function Keg(props){

  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h3>{props.brand}</h3>
      <h3>{props.price}</h3>
      <h3>{props.abv}</h3>
      <h3>{props.pintsLeft}</h3>
      <hr/>
    </React.Fragment>
  );
}

export default Keg;