<<<<<<< HEAD
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MovieList from './components/MovieList/MovieList';

const App = () => {
  const [movieType, setMovieType] = useState(null); // مفيش نوع محدد في الأول

  return (
    <div className='app'>
      <Navbar setMovieType={setMovieType} />
      <MovieList movieType={movieType} />
    </div>
  );
};

export default App;
=======
import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
>>>>>>> d1d8deaeb230af29e31f878f61b5dcee71bdef71
