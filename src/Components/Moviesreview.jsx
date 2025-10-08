import audienceFresh from "../assets/audience-fresh.jpg";
import audienceRotten from "../assets/audience-rotten.jpg";
import criticCertified from "../assets/critic-certified.jpg";
import criticFresh from "../assets/critic-fresh.jpg";
import criticRotten from "../assets/critic-rotten.jpg";
import { movies } from "../../public/movies.js";

function Moviesreview() {
    // Render the movies as responsive cards in rows/columns using a CSS grid.
    return (
        <div>
            <div className="nav-6">
                <h2>Popular Streaming Movies</h2>
                <a href="#">View all</a>
            </div>

            <nav className="nav-7">
                <ul className="stream-list">
                    <li>Vudu</li> |
                    <li>NetFlix</li> |
                    <li>Prime video</li> |
                    <li>max</li> |
                    <li>More...</li>
                </ul>
            </nav>

            <section className="movies-section">
                <div className="movies-grid">
                    {movies.map((item, idx) => (
                        <article className="movie-card" key={item.name + idx}>
                            <img src={item.image} alt={item.name} className="poster" />
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
                                            src={item.audienceScore >= 60 ? audienceFresh : audienceRotten}
                                            alt={item.audienceScore >= 60 ? "audience-fresh" : "audience-rotten"}
                                            className="score-icon"
                                        />
                                        <span className="score-value">{item.audienceScore}%</span>
                                    </div>

                                    <div className="score critic-score">
                                        <img
                                            src={
                                                item.criticScore >= 90
                                                    ? criticCertified
                                                    : item.criticScore >= 60
                                                    ? criticFresh
                                                    : criticRotten
                                            }
                                            alt="critic"
                                            className="score-icon"
                                        />
                                        <span className="score-value">{item.criticScore}%</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Moviesreview;



