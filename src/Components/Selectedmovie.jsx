import audienceFresh from "../assets/audience-fresh.jpg";
import audienceRotten from "../assets/audience-rotten.jpg";
import criticCertified from "../assets/critic-certified.jpg";
import criticFresh from "../assets/critic-fresh.jpg";
import criticRotten from "../assets/critic-rotten.jpg";

function Selectedmovie({ movie, onBack }) {
  // Error handling - if no movie is provided
  if (!movie) {
    return (
      <div className="error-container">
        <h2>No movie selected</h2>
        <button onClick={onBack} className="back-button">
          Go Back to Movies
        </button>
      </div>
    );
  }

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
    if (criticScore >= 90) return "Certified Fresh";
    if (criticScore >= 60) return "Fresh";
    return "Rotten";
  };

  const getAudienceAlt = (audienceScore) => {
    return audienceScore >= 60 ? "Audience Fresh" : "Audience Rotten";
  };

  const getCriticLabel = (criticScore) => {
    if (criticScore >= 90) return "Certified Fresh";
    if (criticScore >= 60) return "Fresh";
    return "Rotten";
  };

  return (
    <div className="selected-movie-container">
      <button onClick={onBack} className="back-button">
        ← Back to Movies
      </button>

      <div className="movie-details">
        <div className="movie-poster-section">
          <img 
            src={movie.image} 
            alt={movie.name} 
            className="movie-poster-large"
          />
        </div>

        <div className="movie-info-section">
          <h1 className="movie-title-large">
            {movie.name} <span className="movie-year-large">({movie.year})</span>
          </h1>

          <p className="movie-meta-large">
            {movie.genre} • {movie.time}
          </p>

          <div className="scores-section">
            <div className="score-card">
              <h3>Tomatometer</h3>
              <div className="score-display">
                <img
                  src={getCriticImage(movie.criticScore)}
                  alt={getCriticAlt(movie.criticScore)}
                  className="score-icon-large"
                />
                <div>
                  <span className="score-value-large">{movie.criticScore}%</span>
                  <span className="score-label">{getCriticLabel(movie.criticScore)}</span>
                </div>
              </div>
            </div>

            <div className="score-card">
              <h3>Audience Score</h3>
              <div className="score-display">
                <img
                  src={getAudienceImage(movie.audienceScore)}
                  alt={getAudienceAlt(movie.audienceScore)}
                  className="score-icon-large"
                />
                <div>
                  <span className="score-value-large">{movie.audienceScore}%</span>
                  <span className="score-label">
                    {movie.audienceScore >= 60 ? "Liked it" : "Didn't like it"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {movie.description && (
            <div className="movie-description">
              <h3>Synopsis</h3>
              <p>{movie.description}</p>
            </div>
          )}

          {movie.director && (
            <div className="movie-detail-row">
              <strong>Director:</strong>
              <span>{movie.director}</span>
            </div>
          )}

          {movie.cast && movie.cast.length > 0 && (
            <div className="movie-detail-row">
              <strong>Cast:</strong>
              <span>{movie.cast.join(", ")}</span>
            </div>
          )}

          {movie.rating && (
            <div className="movie-detail-row">
              <strong>Rating:</strong>
              <span>{movie.rating}</span>
            </div>
          )}

          {movie.studio && (
            <div className="movie-detail-row">
              <strong>Studio:</strong>
              <span>{movie.studio}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Selectedmovie;