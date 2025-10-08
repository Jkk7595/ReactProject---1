import audienceFresh from "../assets/audience-fresh.jpg";
import audienceRotten from "../assets/audience-rotten.jpg";
import criticCertified from "../assets/critic-certified.jpg";
import criticFresh from "../assets/critic-fresh.jpg";
import criticRotten from "../assets/critic-rotten.jpg";
import React from "react";

export default function Selectedmovie({ movie, onBack }) {
    // Defensive rendering with try/catch to avoid breaking the app
    try {
        if (!movie) {
            return (
                <section className="selected-empty">
                    <h2>No movie selected</h2>
                    <p>Click a movie card to view details.</p>
                </section>
            );
        }

        const audienceIcon = movie.audienceScore >= 60 ? audienceFresh : audienceRotten;
        const criticIcon = movie.criticScore >= 90 ? criticCertified : movie.criticScore >= 60 ? criticFresh : criticRotten;

        return (
            <section className="selected-movie">
                <button className="search-button" onClick={() => typeof onBack === "function" && onBack()}>
                    Back
                </button>
                <div className="selected-grid">
                    <img src={movie.image} alt={movie.name} className="poster poster-circle large" />
                    <div className="selected-info">
                        <h2>{movie.name} <span className="movie-year">({movie.year})</span></h2>
                        <p className="movie-meta">{movie.genre} • {movie.time} • {movie.rating}</p>
                        <p className="consensus">{movie.criticConsensus}</p>

                        <div className="scores">
                            <div className="score audience-score">
                                <img src={audienceIcon} alt="audience" className="score-icon" />
                                <strong>{movie.audienceScore}%</strong>
                                <small> ({movie.audienceReviews} reviews)</small>
                            </div>

                            <div className="score critic-score">
                                <img src={criticIcon} alt="critic" className="score-icon" />
                                <strong>{movie.criticScore}%</strong>
                                <small> ({movie.criticReviews} reviews)</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (err) {
        console.error("Selectedmovie render error", err);
        return (
            <section className="selected-error">
                <h2>Something went wrong</h2>
                <p>Unable to display movie details.</p>
                <button className="search-button" onClick={() => typeof onBack === "function" && onBack()}>
                    Back
                </button>
            </section>
        );
    }
}
        
