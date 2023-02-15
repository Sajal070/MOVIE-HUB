import { Button, createTheme, Tab, Tabs, TextField, ThemeProvider } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import './Search.css';
import Custompagination from './Custompagination';
import axios from "axios";
import SearchIcon from '@material-ui/icons/Search'
import Singlecontent from './Singlecontent';
function Search() {
  const[type,settype]=useState(0);
  const[page,setpage]=useState(0);
  const[searchtext,setsearchtext]=useState("");
  const[content,setcontent]=useState();
  const[numofpage,setnumofpage]=useState();
  const darkTheme=createTheme({
    palette:{
      type:'dark',
      primary:{
        main:"#fff",
      },
    },
  });

const fetchdata=async()=>{
const {data}=await axios.get(`https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchtext}&page=${page}`);
setcontent(data.results);
setnumofpage(data.total_pages);
}

useEffect(()=>{
  window.scroll(0,0);
  fetchdata();
},[type,page]);

  return (
    <div>
          <ThemeProvider theme={darkTheme}>
            <div className='box'>
            <TextField
            style={{flex:1}}
            className='searchbox'
            label='Search'
            variant='filled'
            onChange={(e)=>setsearchtext(e.target.value)}
            />
            <Button variant="contained" onClick={fetchdata}>
              <SearchIcon/>
            </Button> 
          </div>

          <Tabs 
          value={type} indicatorColor='primary' textColor='primary'
          onChange={(event,newValue)=>{
            settype(newValue);
            setpage(1);
          }}
          >
            <Tab style={{width:"50%"}} label='Movies'/>
            <Tab style={{width:"50%"}} label='Series'/>
          </Tabs>

          </ThemeProvider>


          <div className='trending'>
          {
            content && content.map((c)=>(
               <Singlecontent key={c.id} id={c.id} 
               poster={c.poster_path} 
               title={c.title || c.name} 
               date={c.first_air_date || c.release_date}
               media_type={type?"tv":"movie"}
               vote_average={c.vote_average}
               />
            ))
          }
          {searchtext && !content && 
          (type ? <h2>NO SERIES FOUND</h2>:<h2>NO MOVIES FOUND</h2>)}
        </div>
        {numofpage>1 && 
        (<Custompagination setpage={setpage}/>
        )}

    </div>
  )
}

export default Search