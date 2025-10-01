


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
              
                {movies.map((item)=(
                  console.log(movies)
                  // <img src={item.image} alt={item.name} />
                ))}
            </div>
        </>
            )
        }
        export default Moviesdetails
                                      

                    
                                        
