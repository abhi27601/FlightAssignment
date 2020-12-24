
import React from 'react';

 const Checkbox = (props) => (

    <label className="col check"> 
         <input name='launch_year' onChange={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} />
         <span> {props.value}</span>
    </label>

)

export default Checkbox;