import React, { Component } from 'react';
import Header from './components/Header/Header';
import Films from './components/Films/Films';
import EditModal from './components/EditModal/EditModal';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header header="Some cool films"/>
        <Films/>
        {this.props.open ? <EditModal/> :null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.open
  };
}


export default connect(mapStateToProps)(App);
