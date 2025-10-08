import React, { useRef, useEffect } from "react";

function Moviesdetails({ movies, onMovieClick }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    
    const id = setInterval(() => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: el.clientWidth * 0.9, behavior: "smooth" });
      }
    }, 3500);
    
    return () => clearInterval(id);
  }, []);

  const handleMovieClick = (movie) => {
    try {
      onMovieClick(movie);
    } catch (error) {
      console.error("Error clicking movie:", error);
    }
  };

  return (
    <>
      <nav className="nav-3">
        <ul>
          <li>Trending on RT</li>
          <li>New</li>
          <li>Top Movies</li>
          <li>Scores</li>
          <li>Loki</li>
          <li>The Creator</li>
          <li>Saw X</li>
          <li>Killers of the Flower Moon</li>
          <li>Exorcist</li>
          <li>Only in the Theatre Friday</li>
        </ul>
      </nav>

      <div className="nav-6">
        <p>NEW & UPCOMING MOVIES IN THEATRE</p>
        <a href="#">View all</a>
      </div>

      <section className="movies-section">
        <div className="carousel-wrap">
          <div className="movies-grid carousel" ref={carouselRef}>
            {movies.map((movie, idx) => (
              <article 
                className="movie-card" 
                key={movie.name + idx}
                onClick={() => handleMovieClick(movie)}
                style={{ cursor: "pointer" }}
              >
                <img 
                  src={movie.image} 
                  alt={movie.name} 
                  className="poster poster-circle" 
                />
                <div className="movie-info">
                  <h3 className="movie-title">
                    {movie.name} <span className="movie-year">({movie.year})</span>
                  </h3>
                  <p className="movie-meta">{movie.genre}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Moviesdetails;