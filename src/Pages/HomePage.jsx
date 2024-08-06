import React from "react";
import './HomePage.css';
import MovieCard from "../Component/MovieCard";
import { Link } from "react-router-dom";

function HomePage(){
     return(
       <>
       <nav>
         <h2 className="movie-logo">movie library</h2>
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">LogOut</Link></li>
            
         </ul>
       </nav>
     
       {/* <MovieCard/> */}
       
       </>
     )
}
export default HomePage;