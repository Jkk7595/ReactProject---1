import audienceFresh from "../assets/audience-fresh.jpg" 
import audienceRotten from"../assets/audience-rotten.jpg"
import criticCertified from "../assets/critic-certified.jpg"
import criticFresh from "../assets/critic-fresh.jpg"
import criticRotten from "../assets/critic-rotten.jpg"
import React from "react"
import { movies } from "../assets/movies.js"
function Moviesdetails(){
    return(

        <>
            <div>
                <nav>
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
            </div>
            
            <div>
                <p>New & upcoming movies in theatre</p>
                <p>View All</p>
              {movies.map((movie)=>(
                        // console.log(movies)
                        
                        <div key={movie.name}>
                            <img src={movie.image} alt={movie.name} />
                            <img src={audienceFresh} />

                        </div>
              ))}
              
               
            </div>
        </>
            )
        }
        export default Moviesdetails
                                      

                    
                                        
