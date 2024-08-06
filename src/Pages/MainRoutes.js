import React from "react";
import {Route, Routes} from 'react-router';

import HomePage from "./HomePage";
import Layout from "../Layout/LayOut";

function MainRoutes(){
     return(
        <div>
            <Layout>
                   <Routes>
                    <Route path="/Home" element={<HomePage/>}/>
                    </Routes>
                   </Layout>
                
            

        </div>
     );
}
export default MainRoutes;