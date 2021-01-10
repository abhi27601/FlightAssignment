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
      <Suspense fallback={ <img className='loader__image' src='../images/loader.gif' /> } >
      <FlightsCards />
      </Suspense>
     
      </div>
     </div>
   </>


);

export default DashBoardPage;
