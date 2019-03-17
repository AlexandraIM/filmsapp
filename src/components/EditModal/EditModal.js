import React,  { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import './EditModal.css';

class EditModal extends Component {
   constructor(props){
     super(props);
     this.state = {
       img : props.film.img,
       title: props.film.title,
       description: props.film.description,
       id: props.film.id
     }
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
          <form>
            <label>Image source:</label>
            <input type="text" value={this.state.img} name="img" onChange={this.changeHandler}/>
            <label>Title:</label>
            <input type="text" value={this.state.title} name="title" onChange={this.changeHandler}/> 
            <label>Description</label>
            <textarea value={this.state.description} name="description" onChange={this.changeHandler}></textarea>
            <Button clicked={(e)=>this.props.onSave(e,this.state)} >Save</Button>
            <Button clicked={this.props.onCancel}>Cancel</Button>
          </form>
        </div>
      </div>
      
    )
  }
}

EditModal.propTypes = {
  film: PropTypes.shape({
    id:PropTypes.number.isRequired,
    img:PropTypes.string,
    title:PropTypes.string.isRequired,
    description:PropTypes.string
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

export default EditModal;