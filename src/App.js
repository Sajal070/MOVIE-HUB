import './App.css';
import Header from './Header';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SimpleBottomNavigation from './MainNav';
import { Container } from '@material-ui/core';
import Trending from './Trending';
import Movies from './Movies';
import Series from './Series';
import Search from './Search';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="app">
      <Container>
        <Routes>
          <Route path='/' element={<Trending/>}/>
          <Route path='/Movies' element={<Movies/>}/>
          <Route path='/Series' element={<Series/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </Container>
    </div>
      <SimpleBottomNavigation/>
    </BrowserRouter> 
  );
}

export default App;
