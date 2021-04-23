import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      formVisibleOnPage: false

    }
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm />
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} />
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  
  }
}

export default KegControl;