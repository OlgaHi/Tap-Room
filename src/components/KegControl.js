import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      formVisibleOnPage: false,
      selectedKeg: null
    }
  }
  
  //determine what state should show
  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
  
  //add new keg into array
  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegtList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegtList,
      formVisibleOnPage: false 
    });
  }
  
  //select a keg
  handleSelectedKeg = (id) => {
    const selectedKeg = this.state.masterTicketList.filter(keg => keg.id === id)[0];
    this.setState({selectedTicket: selectedKeg});
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Menu";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleSelectedKeg}/>
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