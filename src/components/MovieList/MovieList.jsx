import React, { useEffect, useState, useMemo } from 'react';
import './MovieList.css';
import MovieCard from './MovieCard';

const MovieList = ({ movieType }) => {
  const [allMovies, setAllMovies] = useState([]);
  const [displayMovies, setDisplayMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);
  const [minRating, setMinRating] = useState(0);
  const [sortOrder, setSortOrder] = useState('desc');
  const [activeFilter, setActiveFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies(movieType);
  }, [movieType]);

  useEffect(() => {
    handleFilterAndSort();
  }, [allMovies, minRating, sortOrder, searchQuery]);

  const fetchMovies = async (type) => {
    const totalPages = 9;
    let allFetchedMovies = [];
    let url;

    if (type === 'topRated') {
      url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=9ce966a2d7e1bd9ab1cef00c8debcb39';
    } else if (type === 'upcoming') {
      url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=9ce966a2d7e1bd9ab1cef00c8debcb39';
    } else {
      url = 'https://api.themoviedb.org/3/movie/popular?api_key=9ce966a2d7e1bd9ab1cef00c8debcb39';
    }

    try {
      for (let page = 1; page <= totalPages; page++) {
        const response = await fetch(`${url}&page=${page}`);
        const data = await response.json();
        allFetchedMovies = [...allFetchedMovies, ...data.results];
      }
      setAllMovies(allFetchedMovies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterAndSort = () => {
    let filtered = allMovies.filter((movie) => {
      const title = movie.title.toLowerCase();
      const query = searchQuery.toLowerCase();

      return (
        movie.vote_average >= minRating &&
        (query === '' || title.includes(query))
      );
    });

    if (sortOrder === 'asc') {
      filtered.sort((a, b) => a.vote_average - b.vote_average);
    } else if (sortOrder === 'desc') {
      filtered.sort((a, b) => b.vote_average - a.vote_average);
    }

    setDisplayMovies(filtered);
  };

  const handleFilterClick = (rating) => {
    if (minRating === rating) {
      setMinRating(0);
      setActiveFilter(null);
    } else {
      setMinRating(rating);
      setActiveFilter(rating);
    }
  };

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 20);
  };

  const handleSeeLess = () => {
    setVisibleCount(20);
  };

  const filteredMovies = useMemo(() => {
    let filtered = allMovies.filter((movie) => {
      const title = movie.title.toLowerCase();
      const query = searchQuery.toLowerCase();

      return (
        movie.vote_average >= minRating &&
        (query === '' || title.includes(query))
      );
    });

    if (sortOrder === 'asc') {
      filtered.sort((a, b) => a.vote_average - b.vote_average);
    } else if (sortOrder === 'desc') {
      filtered.sort((a, b) => b.vote_average - a.vote_average);
    }

    return filtered;
  }, [allMovies, minRating, sortOrder, searchQuery]);

  useEffect(() => {
    setDisplayMovies(filteredMovies);
  }, [filteredMovies]);

  const ratingFilters = [8, 7, 6];

  return (
    <section className="movie_list">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <header className="align_center movie_list_header">
            <h2 className="align_center movie_list_heading">
              {movieType === 'topRated'
                ? 'Top Rated'
                : movieType === 'upcoming'
                ? 'Upcoming'
                : 'Popular'}
            </h2>

            <div className="align_center movie_list_fs">
              <ul className="align_center movie_filter">
                {ratingFilters.map((rating) => (
                  <li
                    key={rating}
                    className={`movie_filter_item ${activeFilter === rating ? 'active' : ''}`}
                    onClick={() => handleFilterClick(rating)}
                  >
                    {rating}+ Stars
                  </li>
                ))}
              </ul>

              <select
                className="movie_sorting"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="desc">Rating Desc</option>
                <option value="asc">Rating Asc</option>
              </select>

              <input
                type="text"
                className="movie_search_input"
                placeholder="Search Movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  height: '36px',
                  borderRadius: '6px',
                  padding: '0 10px',
                  fontSize: '15px',
                  marginLeft: '10px',
                  backgroundColor: '#2a2a2a',
                  color: '#e50914',
                  border: '1px solid #444',
                  outline: 'none',
                }}
              />
            </div>
          </header>

          <div className="movie_cards">
            {displayMovies.length > 0 ? (
              displayMovies.slice(0, visibleCount).map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))
            ) : (
              <p style={{ color: '#e50914', fontSize: '18px', marginTop: '20px' }}>
                No movies found.
              </p>
            )}
          </div>

          {visibleCount < displayMovies.length && (
            <div style={{ textAlign: 'center', margin: '20px' }}>
              <button onClick={handleSeeMore} className="see_more_button">
                See More
              </button>
              <button onClick={handleSeeLess} className="see_less_button">
                See Less
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default MovieList;
