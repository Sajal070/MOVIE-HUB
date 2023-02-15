import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Trending.css';
import Singlecontent from './Singlecontent';
import Custompagination from './Custompagination';
function Trending() {
  const [page,setpage]=useState(1);
    const [content,setContent]=useState([]);

    const fetchData=async ()=>{
        const {data}= await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
        // console.log(data);
    
    setContent(data.results);
    }
    useEffect(() => {
      fetchData();
    }, [page]);


  return (
    <div className='page'>
        <span className='pagetitle'>Trending</span>
        <div className='trending'>
          {
            content && content.map((c)=>(
               <Singlecontent key={c.id} id={c.id} 
               poster={c.poster_path} 
               title={c.title || c.name} 
               date={c.first_air_date || c.release_date}
               media_type={c.media_type}
               vote_average={c.vote_average}
               />
            ))
          }
        </div>
        <Custompagination setpage={setpage}/>
    </div>
  )
}

export default Trending