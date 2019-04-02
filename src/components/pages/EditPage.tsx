import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import FilmCard from '../Films/Film/Film';
import {getFilm} from '../../actions/actions';
import {FilmEdit} from '../../interface';
import {NavLink} from 'react-router-dom';
import {saveToDb} from '../../actions/actions';


const StyledEditForm = styled.div`
  width: 100%;
  background-color: white;
  padding: 14px 20px;
  margin: 8px 0px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
`
const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`

class EditPage extends React.Component<FilmEdit>{

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
  handleCancel = (e) =>{
    e.preventDefault();
    this.props.history.goBack();
  }

  handleSave = (e) => {
    e.preventDefault();
    this.props.save(this.state);
    this.props.history.goBack();
  }

  render () {

    return (
      <StyledEditForm>
          <form >
            <label>Image source:</label>
            <StyledInput type="text" value={this.state.Poster} name="Poster" onChange={this.changeHandler}/>
            <label>Title:</label>
            <StyledInput type="text" value={this.state.Title} name="Title" onChange={this.changeHandler}/> 
            <label>Year</label>
            <StyledInput type="text" value={this.state.Year} name="Year" onChange={this.changeHandler}/>
            <Button clicked={(e) => this.handleSave(e)} color="green">Save</Button>
            <Button clicked={(e) => this.handleCancel(e)} color="red">Cancel</Button>
          </form>
      </StyledEditForm>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    film: state.filmToShow
  };
}

const mapDispatchToProps= (dispatch) => {
  return {
    save : (film) => dispatch(saveToDb(film))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditPage);