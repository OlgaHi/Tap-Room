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

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegtList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegtList,
      formVisibleOnPage: false 
    });
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Menu";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} />
      buttonText = "Add New Keg";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  
  }
}

export default KegControl;