import React, {Component} from 'react';
import FilmCard from './Film/Film';

import './Films.css';


class Films extends Component{

  state = {
    films : [
      {
        id:1,
        title: "The Matrix", 
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg", 
        description:"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
      },
      {
        id:2,
        title:"Captain Marvel",
        img:"https://upload.wikimedia.org/wikipedia/en/8/85/Captain_Marvel_poster.jpg",
        description:"Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races."
      },
      {
        id:3,
        title:"Suicide Squad",
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Suicide_Squad_%28film%29_Poster.png/220px-Suicide_Squad_%28film%29_Poster.png",
        description:"A secret government agency recruits some of the most dangerous incarcerated super-villains to form a defensive task force. Their first mission: save the world from the apocalypse."
      },
      {
        id:4,
        title:"A Dog's Purpose",
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/A_Dog%27s_Purpose_%28film%29.jpg/220px-A_Dog%27s_Purpose_%28film%29.jpg",
        description:"A dog looks to discover his purpose in life over the course of several lifetimes and owners."
      }
    ]
  }

  render(){
    const films = this.state.films.map(film => {
      return <FilmCard 
              key={film.id} 
              title={film.title} 
              src={film.img} 
              description={film.description}/>
    } )
    return ( 
      <div className="films">
        {films}
      </div>)
  }
}

export default Films;