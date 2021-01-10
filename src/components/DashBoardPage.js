import React,{ lazy, Suspense } from "react";
//import  FlightsCards from "./FlightsCards";
import Navigation from "./Navigation";


const FlightsCards = lazy(() => import("./FlightsCards")
)
const DashBoardPage = (props) => (
 
   <>
      <div className = 'container-fluid d-md-flex'>
      <div className="row p-4">
      <Navigation {...props} />
      <Suspense fallback={<h1>Loading Cards </h1>} >
      <FlightsCards />
      </Suspense>
     
      </div>
     </div>
   </>


);

export default DashBoardPage;
