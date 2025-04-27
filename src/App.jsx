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