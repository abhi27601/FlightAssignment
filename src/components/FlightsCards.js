import React from "react";
import { connect } from "react-redux";
import FlightCard from "./FlightCard";
import Navigation from "./Navigation";
import getVisibleFlights from "../selectors/getVisibleFlights";

export const FlightsCards = (props) => (
    <>
<div className="row setmaxwidth">
    
      {props.flights.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No Flights Launched</span>
        </div>
      ) : (
        props.flights.map((flight, index) => {
          return (
            <FlightCard key={flight.flight_number} {...flight}></FlightCard>
          );
        })
      )}
     
      </div>   
  </>
);

const mapStateToProps = (state) => {
  return {
    flights: getVisibleFlights(state.flights,state.filters)
    //filters:state.filters not needed for this component
  };
};

export default connect(mapStateToProps)(FlightsCards);
