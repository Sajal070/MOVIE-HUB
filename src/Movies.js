import React, { useEffect, useState } from 'react'
import axios from "axios";
import Custompagination from './Custompagination';
import Singlecontent from './Singlecontent';
import './Trending.css';
function Movies() {
  const[page,setpage]=useState(1);
  const[content,setContent]=useState([]);
  const[numofpages,setNumofpages]=useState();
  const[genres,setgenres]=useState([]);
  const[selectedgenre,setselectedgenre]=useState([]);

  const fetchData=async()=>{

    const {data}= await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`);
    setContent(data.results);
    setNumofpages(data.total_pages);
  }
  
  useEffect(()=>{
    fetchData();
  },[page])

  return (
    <div>
        <span className='pagetitle'>Movies</span>
        
        <div className='trending'>
          {
            content && content.map((c)=>(
               <Singlecontent key={c.id} id={c.id} 
               poster={c.poster_path} 
               title={c.title || c.name} 
               date={c.first_air_date || c.release_date}
               media_type="movie"
               vote_average={c.vote_average}
               />
            ))
          }
        </div>
        {numofpages>1 && (
          <Custompagination setpage={setpage} numofpages={numofpages}/>
        )}
    </div>
  )
}

export default Movies