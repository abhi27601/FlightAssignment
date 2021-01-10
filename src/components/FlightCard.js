import React from "react";
import 'lazysizes';

export const FlightCard = (props) => (
  
  
    <div className="card centeralign">
      <div className = 'card__align'>
     
      <img
        src={props.links.mission_patch_small}
        data-sizes='auto'
        className="card-img-top lazyload"
        alt="..."
      />
      <p className="card-header ellipsescontent textcolor">{props.mission_name}<span> #{ props.flight_number} </span></p>
      <div className="card-body">
       { /*<h5 className="card-title ">{props.mission_name}</h5> */ }
        
        
        <ul className="card-text list-group list-group-flush">
           <li className="list-group-item"><span className = 'font-weight-bold'>Mission Ids</span>: {<span className = 'font-weight-bold textcolor'>{ `[ ${props.mission_id}]`}</span>}</li>
           <li className="list-group-item"><span className = 'font-weight-bold'>Launch Year</span>: {<span className = 'font-weight-bold textcolor'>{props.launch_year}</span>}</li>
           <li className="list-group-item"><span className = 'font-weight-bold'>Successful Launch</span>: { <span className = 'font-weight-bold textcolor'>{`${props.launch_success}`}</span>}</li>
          <li className="list-group-item"><span className = 'font-weight-bold'>Successful Landing</span>: {<span className = 'font-weight-bold textcolor'>{`${props.rocket.first_stage.cores[0].land_success==true ? props.rocket.first_stage.cores[0].land_success : props.rocket.first_stage.cores[0].land_success==false ? false : 'Not Available'}`}</span>}</li>
        </ul>
      </div>
      </div>
    </div>
  
    
  
);

export default FlightCard;
