import React from "react";

export const FlightCard = (props) => (
  <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
    <div className="card">
      <img
        src={props.links.mission_patch_small}
        className="card-img-top"
        alt="..."
      />
      <p className="card-header font-weight-bold ellipsescontent">{props.mission_name}<span> #{ props.flight_number} </span></p>
      <div className="card-body">
        <h5 className="card-title ">{props.mission_name}</h5>
        
        
        <ul className="card-text list-group list-group-flush">
           <li className="list-group-item"><span className = 'font-weight-bold'>Mission Ids</span>: {`[ ${props.mission_id} ]`}</li>
           <li className="list-group-item"><span className = 'font-weight-bold'>Launch Year</span>: {props.launch_year}</li>
           <li className="list-group-item"><span className = 'font-weight-bold'>Successful Launch</span>: { `${props.launch_success}`}</li>
          <li className="list-group-item"><span className = 'font-weight-bold'>Successful Landing</span>: {`${props.rocket.first_stage.cores[0].land_success}`}</li>
        </ul>
      
      </div>
    </div>
  </div>
);

export default FlightCard;
