import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: parseInt(event.target.price.value), 
      abv: event.target.abv.value,
      pintsLeft: parseInt(event.target.pintsLeft.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <h3>Add a new keg:</h3>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type='number'
          name='price'
          placeholder='Price' />
        <input
          type='text'
          name='abv'
          placeholder='Alcohol Content' />
        <input
          type='number'
          name='pintsLeft'
          placeholder='Quantity' />
        
        <button type='submit'>Add</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;