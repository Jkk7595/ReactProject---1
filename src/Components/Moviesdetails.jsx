import audienceFresh from "../assets/audience-fresh.jpg";
import audienceRotten from "../assets/audience-rotten.jpg";
import criticCertified from "../assets/critic-certified.jpg";
import criticFresh from "../assets/critic-fresh.jpg";
import criticRotten from "../assets/critic-rotten.jpg";
import React, { useRef, useEffect } from "react";
import { movies } from "../../public/movies.js";

function Moviesdetails({ onMovieSelect }) {
    const carouselRef = useRef(null);

    useEffect(() => {
        const el = carouselRef.current;
        if (!el) return;
        const id = setInterval(() => {
            if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) el.scrollTo({ left: 0, behavior: "smooth" });
            else el.scrollBy({ left: el.clientWidth * 0.9, behavior: "smooth" });
        }, 3500);
        return () => clearInterval(id);
    }, []);

    return (
        <>
            <nav className="nav-3">
                <ul>
                    <li>Treading on RT</li>
                    <li>New</li>
                    <li>Tm</li>
                    <li>Scores</li>
                    <li>Loki</li>
                    <li>the Creator</li>
                    <li>Saw x</li>
                    <li>Killers of the Flower</li>
                    <li>moon</li>
                    <li>Exorcist</li>
                    <li>Only in the theatre Friday</li>
                </ul>
            </nav>

            <div >
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
                                role="button"
                                tabIndex={0}
                                onClick={() => typeof onMovieSelect === "function" && onMovieSelect(movie)}
                                onKeyDown={(e) => { if (e.key === 'Enter') typeof onMovieSelect === 'function' && onMovieSelect(movie) }}
                            >
                                <img src={movie.image} alt={movie.name} className="poster poster-circle" />
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
                                      
               

                    
                                        
