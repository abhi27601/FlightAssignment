import React from "react";
import  FlightsCards from "./FlightsCards";
import Navigation from "./Navigation";
const DashBoardPage = () => (
 
   <>
      <div className = 'container-fluid d-md-flex'>
      <div className="row p-4">
      <Navigation />
      <FlightsCards />
     
      </div>
     </div>
   </>


);

export default DashBoardPage;
