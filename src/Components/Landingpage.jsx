import rotten from"../assets/logo.jpg.png"
function Landingpage(){

    return(
        <>
            <main>
                <img src={rotten} alt="Logo" />
                        <input type="text"  placeholder="Search movies,tv,actors..." />
                <div className="nav-bar">
              
                    <div>
                        <ul>

                        <li>What's the Tomatoes®?</li>
                        <li>Critics</li>
                        <li>Login/signup</li> 
                        </ul>
                    </div>

                        <div className="nav2">
                            <ul>

                        <li>Movies</li>
                        <li>Tv Shows</li>
                        <li>Movie Trivia</li>
                        <li>Showtime</li>
                    
                            </ul>
                        </div>
                </div>
       
             </main>
        
        
        </>
  
            )
        }
        export default Landingpage
            
            

        
        
        
