import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm'

const centerAlign = {
  textAlign: "center",
  margin: "5%",
};

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    }
  }
  
  //determine what state should show
  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }
  
  //add new keg into array
  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false 
    });
  }
  
  //select a keg
  handleSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  //decrease pints
  handleDecrease = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    if (selectedKeg.pintsLeft > 0) {
      selectedKeg.pintsLeft --;
      this.setState({selectedKeg: null});
    } else {
      alert("Sorry, its out of stock");
    }
  }

  //delete a keg
  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    });
  }
  
  //handle edit button
  handleEditClick = () => {
    this.setState({editing: true});
  }
  
  //edit keg in a list
  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter((keg) => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
        masterKegList: editedMasterKegList,
        editing: false,
        selectedKeg: null
      });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing ) {      
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Menu";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg} onClickingEdit = {this.handleEditClick}/>
      buttonText = "Return to Menu";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Menu";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleSelectedKeg} onDecrease={this.handleDecrease}/>
      buttonText = "Add New Keg";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <div style={centerAlign}>
          <button className="btn btn-light" onClick={this.handleClick}>
            {buttonText}
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default KegControl;