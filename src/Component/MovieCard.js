import React from 'react';
import './MovieCard.css';
import { MovieList } from '../Db';
// import HomePage from '../Pages/HomePage';
function MovieCard({SortedOreder}){
   console.log("movieProgaram",MovieList);
    console.log("SortedOred", SortedOreder);
    
   const MovieToDispaly = SortedOreder.length > 0 ? SortedOreder : MovieList.movies;
    
    return(
        <div>
            {/* <h1>This is new MovieCard</h1> */}
           
            <div className='container' style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)', gap:"1.5rem",marginLeft:"12rem"}}>
            {MovieToDispaly.map((m,index)=>(
                    <div key={index} className='card movie_card' style={{marginTop:"5rem"}} >
                         <div className='movie_image'>
                            <img src={m.Poster} alt='movie-list' class="card-img-top"/>
                         </div>
                         <div className='card-body' style={{textAlign:"center"}}>
                        <p className='movie_title'>{m.Title}</p>
                        <p className='movie_year'>{m.Year}</p>
                        <p className='movie_type'>{m.Type}</p>
                        <p className='movie_reating'>{m.rating}</p>
                        </div>
                        </div>
                ))}
            </div>
        </div>
    );
}
export default MovieCard;