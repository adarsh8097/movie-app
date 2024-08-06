import React from "react";
import {Route, Routes,Router} from 'react-router';

import HomePage from "./HomePage";
import Layout from "../Layout/LayOut";
import MovieDetails from "./MovieListdetails";
import { AuthProvider } from "../Component/AuthContext";
import LoginForm from "./Login";
import RegisterForm from "./RegisterForm";
function MainRoutes(){
     return(
        <div>
            {/* <Layout>
                   <Routes>
                    <Route path="/Home" element={<HomePage/>}/>
                    <Route path="movie/:id" element={<MovieDetails/>}/>
                    </Routes>
                   </Layout> */}
                   <AuthProvider>
            {/* <Router> */}
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                     <Route path="/register" element={<RegisterForm/>}/>
                    <Route path="*" element={<Layout />} />
                </Routes>
            {/* </Router> */}
        </AuthProvider>
                
            

        </div>
     );
}
export default MainRoutes;