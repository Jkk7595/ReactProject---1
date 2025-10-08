import { useState } from "react";
import Landingpage from "./Components/Landingpage";
import Moviesdetails from "./Components/Moviesdetails";
import Moviesreview from "./Components/Moviesreview";
import Selectedmovie from "./Components/Selectedmovie";

function App() {
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState("home"); // simple page state (home/details)

  function handleSelect(movie) {
    setSelected(movie);
    setPage("details");
  }

  function handleBack() {
    setPage("home");
  }

  return (
    <>
      <Landingpage />
      {page === "home" && (
        <>
          <Moviesdetails onMovieSelect={handleSelect} />
          <Moviesreview onMovieSelect={handleSelect} />
        </>
      )}

      {page === "details" && (
        <Selectedmovie movie={selected} onBack={handleBack} />
      )}
    </>
  );
}

export default App
