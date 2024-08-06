import React,{useState} from "react";
import HomePage from "../Pages/HomePage";
import Sidebar from "../Component/Sidebar";
import MainContent from "../Component/MainContent";
import Footer from "../Pages/FooterPage";
import MovieCard from "../Component/MovieCard";
import { MovieList } from "../Db";

const Layout =({children})=>{
    console.log("MovielistItem", MovieList);
    const[SortedOreder , setIsSortedOrder] = useState(MovieList.movies);
    const[sortOrder,setSortOrder] = useState();
    const [selectedRatings, setSelectedRatings] = useState([]);
  
    const handleSortedChange =(order)=>{
         setSortOrder(order);
         const sorted =[...MovieList.movies].sort((a,b)=>{
            if(order === 'ascending'){
                return a.Year -  b.Year;
            }else{
                return b.Year - a.Year;
            }
         });
         setIsSortedOrder(sorted);

    }

    const handleRatingChange = (rating) => {
        let updatedRatings;
        if (selectedRatings.includes(rating)) {
            updatedRatings = selectedRatings.filter(r => r !== rating);
        } else {
            updatedRatings = [...selectedRatings, rating];
        }
        setSelectedRatings(updatedRatings);

        const filtered = MovieList.movies.filter(movie => updatedRatings.includes(movie.rating));
        setIsSortedOrder(filtered.length > 0 ? filtered : MovieList.movies);
    };

    console.log("SortedMovie", SortedOreder);
    return (
        <div className="layout">
          <HomePage />
          <div className="content">
            <Sidebar 
            sortOrder={sortOrder} 
            handleSortedChange={handleSortedChange}
            selectedRatings={selectedRatings}
            handleRatingChange ={handleRatingChange}
            />
            <MainContent>
                <MovieCard SortedOreder={SortedOreder}/>
            </MainContent>
          </div>
          <Footer />
        </div>
      );
}

export default Layout;