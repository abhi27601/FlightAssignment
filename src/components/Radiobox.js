
  
import React from 'react';

const Radiobox = (props) => (

 
   <label className="col check"> 
  <input type="radio" name={props.radioname} onChange={props.handleCheckRadioElement} checked={props.isChecked} value={props.value} /> 
  <span>{props.value}</span> 
  </label> 

)

export default Radiobox;
  