import { useState } from "react";
import Landingpage from "./Components/Landingpage";
import Moviesdetails from "./Components/Moviesdetails";
import Moviesreview from "./Components/Moviesreview";
import Selectedmovie from "./Components/Selectedmovie";
import { movies } from "../public/movies.js";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    try {
      if (!movie) {
        throw new Error("Invalid movie data");
      }
      setSelectedMovie(movie);
      setCurrentPage("movie");
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error selecting movie:", error);
      alert("Failed to load movie details. Please try again.");
    }
  };

  const handleBackHome = () => {
    setCurrentPage("home");
    setSelectedMovie(null);
  };

  return (
    <>
      <Landingpage onBackHome={handleBackHome} />
      
      {currentPage === "home" && (
        <>
          <Moviesdetails movies={movies} onMovieClick={handleMovieClick} />
          <Moviesreview movies={movies} onMovieClick={handleMovieClick} />
        </>
      )}
      
      {currentPage === "movie" && selectedMovie && (
        <Selectedmovie movie={selectedMovie} onBack={handleBackHome} />
      )}
    </>
  );
}

export default App;