import audienceFresh from "../assets/audience-fresh.jpg" 
import audienceRotten from"../assets/audience-rotten.jpg"
import criticCertified from "../assets/critic-certified.jpg"
import criticFresh from "../assets/critic-fresh.jpg"
import criticRotten from "../assets/critic-rotten.jpg"
import React, { useEffect } from "react"
import { movies } from "../../public/movies.js"
function Moviesdetails(){
    
    return(

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
            <div className="nav-4">
                <p>NEW & UPCOMING MOVIES IN THEATRE</p>
                <a href="#">View all</a>
                </div>
                <div className="nav-5">
              {movies.map((movie)=>(
                        // console.log(movies)
                        
                        <div key={movie.name}>
                            <img src={movie.image} alt={movie.name} />
                            <p>{movie.genre}</p>
                            <p>{movie.year}</p>

                        </div>
              ))}
              
            </div>
        </>
            )
        
            
                            
        }
            
        export default Moviesdetails
                                      
               

                    
                                        
