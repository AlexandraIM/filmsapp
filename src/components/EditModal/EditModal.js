import React,  { Component } from 'react';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import {closeEditModal, saveFilm} from '../../actions/actions';

import './EditModal.css';

class EditModal extends Component {
  state = {
    imdbID:'',
    Poster:'',
    Title:'',
    Year:''
  }

  componentDidMount(){
      this.setState({...this.props.film});
  }


  changeHandler =(e) => {
    const name = e.target.name;
    const value = e.target.value
    this.setState({
       [name]:value })
  }

  render(){
    return (
      <div className="backdrop">
        <div className="modal">
          <form >
            <label>Image source:</label>
            <input type="text" value={this.state.Poster} name="Poster" onChange={this.changeHandler}/>
            <label>Title:</label>
            <input type="text" value={this.state.Title} name="Title" onChange={this.changeHandler}/> 
            <label>Year</label>
            <input type="text" value={this.state.Year} name="Year" onChange={this.changeHandler}/>
            <Button clicked={() => this.props.save(this.state)}>Save</Button>
            <Button clicked={this.props.closeEdit}>Cancel</Button>
          </form>
        </div>
      </div>
      
    )
  }
}


const mapStateToProps = (state) => {
  return {
    film: state.filmToEdit
  };
}

const mapDispatchToProps= (dispatch) => {
  return {
    closeEdit : () => dispatch(closeEditModal()),
    save : (film) => dispatch(saveFilm(film))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditModal);