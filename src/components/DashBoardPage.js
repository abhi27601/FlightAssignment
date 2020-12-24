import React from "react";
import  FlightsCards from "./FlightsCards";
import Navigation from "./Navigation";
const DashBoardPage = () => (
 
   <>
      <div className = 'container-fluid d-md-flex'>


<Navigation />
     <FlightsCards />
     </div>
   </>


);

export default DashBoardPage;
