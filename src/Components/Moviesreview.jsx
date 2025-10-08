import audienceFresh from "../assets/audience-fresh.jpg";
import audienceRotten from "../assets/audience-rotten.jpg";
import criticCertified from "../assets/critic-certified.jpg";
import criticFresh from "../assets/critic-fresh.jpg";
import criticRotten from "../assets/critic-rotten.jpg";
import { useRef, useEffect } from "react";

function Moviesreview({ movies, onMovieClick }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    
    const step = () => {
      const scrollAmount = el.clientWidth * 0.9;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };
    
    const id = setInterval(step, 3000);
    return () => clearInterval(id);
  }, []);

  const handlePrev = () => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: -el.clientWidth * 0.9, behavior: "smooth" });
  };

  const handleNext = () => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.9, behavior: "smooth" });
  };

  const handleMovieClick = (movie) => {
    try {
      onMovieClick(movie);
    } catch (error) {
      console.error("Error clicking movie:", error);
    }
  };

  // Conditional rendering for tomato icons based on score
  const getCriticImage = (criticScore) => {
    if (criticScore >= 90) {
      return criticCertified; // Certified Fresh
    } else if (criticScore >= 60) {
      return criticFresh; // Fresh
    } else {
      return criticRotten; // Rotten
    }
  };

  const getAudienceImage = (audienceScore) => {
    if (audienceScore >= 60) {
      return audienceFresh; // Fresh
    } else {
      return audienceRotten; // Rotten
    }
  };

  const getCriticAlt = (criticScore) => {
    if (criticScore >= 90) return "critic-certified";
    if (criticScore >= 60) return "critic-fresh";
    return "critic-rotten";
  };

  const getAudienceAlt = (audienceScore) => {
    return audienceScore >= 60 ? "audience-fresh" : "audience-rotten";
  };

  return (
    <div>
      <div className="nav-6">
        <h2>Popular Streaming Movies</h2>
        <a href="#">View all</a>
      </div>

      <nav className="nav-7">
        <ul className="stream-list">
          <li>Vudu</li> |
          <li>Netflix</li> |
          <li>Prime video</li> |
          <li>Max</li> |
          <li>More...</li>
        </ul>
      </nav>

      <section className="movies-section">
        <div className="carousel-wrap">
          <button 
            className="carousel-btn prev" 
            onClick={handlePrev} 
            aria-label="Previous"
          >
            ‹
          </button>
          
          <div className="movies-grid carousel" ref={carouselRef}>
            {movies.map((item, idx) => (
              <article 
                className="movie-card" 
                key={item.name + idx}
                onClick={() => handleMovieClick(item)}
                style={{ cursor: "pointer" }}
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="poster poster-circle" 
                />
                <div className="movie-info">
                  <h3 className="movie-title">
                    {item.name} <span className="movie-year">({item.year})</span>
                  </h3>
                  <p className="movie-meta">
                    {item.genre} • {item.time}
                  </p>

                  <div className="scores">
                    <div className="score audience-score">
                      <img
                        src={getAudienceImage(item.audienceScore)}
                        alt={getAudienceAlt(item.audienceScore)}
                        className="score-icon"
                      />
                      <span className="score-value">{item.audienceScore}%</span>
                    </div>

                    <div className="score critic-score">
                      <img
                        src={getCriticImage(item.criticScore)}
                        alt={getCriticAlt(item.criticScore)}
                        className="score-icon"
                      />
                      <span className="score-value">{item.criticScore}%</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <button 
            className="carousel-btn next" 
            onClick={handleNext} 
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </section>
    </div>
  );
}

export default Moviesreview;