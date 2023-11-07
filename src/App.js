import React from "react";
import { moviesDummy } from "./moviesDummy";
import Movies from "./components/Movies";


function App() {

    return(
        <div>
            <div className="app_container">
                {
                    moviesDummy.results.map((item) =>{
                        return(
                            <>
                                <Movies 
                                key = {item.id}
                                title = {item.title}
                                poster_path ={item.poster_path}
                                vote_average ={item.vote_average}
                                overview={item.overview}
                                />
                            </>
                        )
                    }
                    )
                }
            </div>

        </div>
    );

}

export default App;