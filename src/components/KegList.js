import React from "react";
import Keg from "./KegList";
import PropTypes from "prop-types";

function KegList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.kegList.map((keg) =>
          <Keg 
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            pintsLeft={keg.pintsLeft}
            id={keg.id}
            key={keg.id}/>
    )}
    </React.Fragment>
    
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  
}

export default KegList;