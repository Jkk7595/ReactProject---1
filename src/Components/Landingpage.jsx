import rotten from"../assets/logo.png.png"
import SearchIcon from "./SearchIcon"

function Landingpage(){

    return(
        <>
            <main>
                <img src={rotten} alt="Logo" />
                    <SearchIcon />
                        <i className="fas fa-search"></i>
                <div className="nav-1">
                        <ul>
                            <li>What's the Tomatoes®?</li>
                            <li>Critics</li>
                            <li>Login/signup</li> 
                        </ul>
                </div>
                <div className="nav-2">
                            <ul>
                                <li>Movies</li>
                                <li>Tv Shows</li>
                                <li>Movie Trivia</li>
                                <li>Showtime</li>
                            </ul>
                </div>

       
            </main>
        </>
                    

                        
  
            )
        }
        export default Landingpage

                
            
        
        
                
              
                    
                    
            
            

        
        
        
