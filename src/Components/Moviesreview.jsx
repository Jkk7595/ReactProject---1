import audienceFresh from "../assets/audience-fresh.jpg" 
import audienceRotten from"../assets/audience-rotten.jpg"
import criticCertified from "../assets/critic-certified.jpg"
import criticFresh from "../assets/critic-fresh.jpg"
import criticRotten from "../assets/critic-rotten.jpg"
import {movies} from "../../public/movies.js"
import { useEffect } from "react"
function Moviesreview(){
//  function handleChange(){
//     useEffect(()={
        
//     })
//  }
    return(

        <div >
            <div className="nav-6">
           <h2>Popular Streaming Movies</h2>
           <a href="#">View all</a>
            </div>
            <nav className="nav-7">
               <ul>
                    <li>Vudu</li> |
                    <li>NetFlix</li> |
                    <li>Prime video</li> |
                    <li>max</li> |
                    <li>More...</li> 
                    
                    
                    {movies.map((item)=>(
                        // console.log(movies)
                        <div>
                            
                            <p>{item.name}</p>
                            <button >src={audienceFresh}</button>
                            <p>{item.audienceScore}%</p>
                        
                        </div>
                            )
                        )}


                    
               </ul>
            </nav>
         
           
        </div>
    )
}
export default Moviesreview

           
 
