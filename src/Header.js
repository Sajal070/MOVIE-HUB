import React from 'react'
import './Header.css';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';

export default function Header() {
  return (
        <span className='header' onClick={()=> window.scroll(0,0)}>
          <MovieFilterIcon/>
          <h2>Movie Hub</h2>
        </span>
  ) 
}
