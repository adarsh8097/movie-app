import React, { useState } from 'react';
import HomePage from '../Pages/HomePage';
import Sidebar from '../Component/Sidebar';
import MainContent from '../Component/MainContent';
import Footer from '../Pages/FooterPage';
import MovieCard from '../Component/MovieCard';
import { MovieList } from '../Db';
import LoginForm from '../Pages/Login';
// import { useAuth } from '../AuthContext';
import { useAuth } from '../Component/AuthContext';
import ProtectedRoute from '../Component/Protected';

const Layout = () => {
    const [sortedMovies, setSortedMovies] = useState(MovieList.movies);
    const [sortOrder, setSortOrder] = useState();
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const { isAuthenticated } = useAuth();

    const handleSortedChange = (order) => {
        setSortOrder(order);
        const sorted = [...MovieList.movies].sort((a, b) => {
            if (order === 'ascending') {
                return a.Year - b.Year;
            } else {
                return b.Year - a.Year;
            }
        });
        setSortedMovies(sorted);
    };

    const handleRatingChange = (rating) => {
        let updatedRatings;
        if (selectedRatings.includes(rating)) {
            updatedRatings = selectedRatings.filter(r => r !== rating);
        } else {
            updatedRatings = [...selectedRatings, rating];
        }
        setSelectedRatings(updatedRatings);

        const filtered = MovieList.movies.filter(movie => updatedRatings.includes(movie.rating));
        setSortedMovies(filtered.length > 0 ? filtered : MovieList.movies);
    };

    const handleSingleItem = (movie) => {
        setSelectedMovie(movie);
    };

    return (
        <div className="layout">
            <HomePage />
            <div className="content">
                <Sidebar 
                    sortOrder={sortOrder} 
                    handleSortedChange={handleSortedChange}
                    selectedRatings={selectedRatings}
                    handleRatingChange={handleRatingChange}
                />
                <MainContent>
                    <ProtectedRoute>
                        {selectedMovie ? (
                            <div className="single-movie-details" style={{ marginLeft: "20rem", marginTop: "5rem" }}>
                                <div style={{ textAlign: "center" }}>
                                    <p style={{ fontWeight: "bold" }}>{selectedMovie.id}</p>
                                    <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
                                    <h3>{selectedMovie.Title}</h3>
                                    <p>Release Year:&nbsp;{selectedMovie.Year}</p>
                                    <p>Type:&nbsp;{selectedMovie.Type}</p>
                                    <p>Rating:&nbsp;{selectedMovie.rating}</p>
                                </div>
                            </div>
                        ) : (
                            <MovieCard 
                                SortedOreder={sortedMovies} 
                                handleSingleItem={handleSingleItem} 
                            />
                        )}
                    </ProtectedRoute>
                </MainContent>
            </div>
            <div>
                {/* <LoginForm /> */}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
