import React from "react";
import { connect } from "react-redux";
import FlightCard from "./FlightCard";
import Navigation from "./Navigation";
import getVisibleFlights from "../selectors/getVisibleFlights";

export const FlightsCards = (props) => (
  <>
    <div className="col">
      <div className="row row-cols-md-2 row-cols-lg-4">
        {
          //col-sm-6 col-md-4 col-lg-3 mb-4
          props.flights.length === 0 ? (
            <div className="list-item list-item--message">
              <span>No Flights Launched</span>
            </div>
          ) : (
            props.flights.map((flight, index) => {
              return (
                <FlightCard key={flight.flight_number} {...flight}></FlightCard>
              );
            })
          )
        }
      </div>
     
    </div>
  </>
);

const mapStateToProps = (state) => {
  return {
    flights: getVisibleFlights(state.flights, state.filters),
    //filters:state.filters not needed for this component
  };
};

export default connect(mapStateToProps)(FlightsCards);
