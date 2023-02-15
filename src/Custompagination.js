import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import './CustomPagination.css';
import { createTheme, ThemeProvider } from '@material-ui/core';


function Custompagination({setpage,numofpages=10}) {
  const handlePageChange=(page)=>{
    setpage(page);
    window.scroll(0,0);
  }
  
  const darkTheme=createTheme({
    palette:{
      type:'dark',
      primary:{
        main:"#fff",
      },
    },
  });
  return (
    <div className='pages'>
      <ThemeProvider theme={darkTheme}>
      <Pagination className='page' count={numofpages} onChange={(e)=>handlePageChange(e.target.textContent)}
        hideNextButton
        hidePrevButton
        color='primary'/>
      </ThemeProvider>
    </div>
  )
}

export default Custompagination