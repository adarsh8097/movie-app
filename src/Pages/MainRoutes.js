import React from "react";
import {Route, Routes} from 'react-router';

import HomePage from "./HomePage";
import Layout from "../Layout/LayOut";
import MovieDetails from "./MovieListdetails";

function MainRoutes(){
     return(
        <div>
            <Layout>
                   <Routes>
                    <Route path="/Home" element={<HomePage/>}/>
                    <Route path="movie/:id" element={<MovieDetails/>}/>
                    </Routes>
                   </Layout>
                
            

        </div>
     );
}
export default MainRoutes;