import React from "react";
import { moviesDummy } from "./moviesDummy";
import Movie from "./Components/Movie";
import { AppContainer } from "./Components/Movie.style";

function App() {


    return(
        <div>
            <AppContainer>
                {
                    moviesDummy.results.map((movie) =>{
                        return(
                            
                            <Movie 
                                key = {movie.id}
                                movie={movie}
                            />
                            
                        )
                    }
                    )
                }
            </AppContainer>

        </div>
    );

}

export default App;