import React from "react";
import PropTypes from "prop-types";

function Keg(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
      <h3>Bear name: {props.name}</h3>
      <h3>Bear brand: {props.brand}</h3>
      <h3>Price: {props.price}</h3>
      <h3>Alcohol Content: {props.abv}</h3>
      <h3>Pints left: {props.pintsLeft}</h3>
      </div>
      <button onClick = {() => props.whenSellClicked(props.id)}>Sell</button>
      <hr/>
      
      
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.string,
  pintsLeft: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenSellClicked: PropTypes.func
};

export default Keg;