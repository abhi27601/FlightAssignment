import React from "react";
import { connect } from "react-redux";
import Checkbox from "./Checkbox";
import Radiobox from "./Radiobox";
import getVisibleFlights from "../selectors/getVisibleFlights";
import { setLaunchYear, setSuccessfulLanding , setSuccessfulLaunch,setRemoveFilters } from "../actions/filters";

export class Navigation extends React.Component {
  state = {
    launch_years: [
      {id: 1, value: "2006", isChecked: false},
      {id: 2, value: "2007", isChecked: false},
      {id: 3, value: "2008", isChecked: false},
      {id: 4, value: "2009", isChecked: false},
      {id: 5, value: "2010", isChecked: false},
      {id: 6, value: "2011", isChecked: false},
      {id: 7, value: "2012", isChecked: false},
      {id: 8, value: "2013", isChecked: false},
      {id: 9, value: "2014", isChecked: false},
      {id: 10, value: "2015", isChecked: false},
      {id: 11, value: "2016", isChecked: false},
      {id: 12, value: "2017", isChecked: false},
      {id: 13, value: "2018", isChecked: false},
      {id: 14, value: "2019", isChecked: false},
      {id: 15, value: "2020", isChecked: false},
    ],
    launch_success:[
    {id: 16, value: "true", isChecked: false},
    {id: 17, value: "false", isChecked: false},
  ],
    land_success:[ {id: 18, value: "true", isChecked: false},
    {id: 19, value: "false", isChecked: false}
  ]
  };
  componentDidMount(prevprops,prevstate) {
    try {
      const json_land_success = localStorage.getItem('json_land_success');
      
      const json_launch_success = localStorage.getItem('json_launch_success');
     
      const json_launch_years = localStorage.getItem('json_launch_years');
      
        if(json_land_success.length == 0 && json_launch_success.length == 0 && json_launch_years == 0){
        }
        else{
          if(JSON.parse(json_land_success)){
            const land_success = JSON.parse(json_land_success);
            this.setState(() => ({ land_success }));
            this.props.setSuccessfulLanding(this.state.land_success);
          }
          
          if(JSON.parse(json_launch_success)){
            const launch_success = JSON.parse(json_launch_success);
            this.setState(() => ({ launch_success }));
            this.props.setSuccessfulLaunch(this.state.launch_success);
          }
          
          if(JSON.parse(json_launch_years)){
            const launch_years = JSON.parse(json_launch_years);
            this.setState(() => ({launch_years}));
            this.props.setLaunchYear(launch_years);
          }

        } 
          
        
       
      
    } catch (e) {
      // Do nothing at all
    }
    
  }
  componentDidUpdate(prevProps, prevState) {
  
    const json_launch_years = JSON.stringify(this.state.launch_years);
      localStorage.setItem('json_launch_years', json_launch_years);
    const json_launch_success = JSON.stringify(this.state.launch_success);
      localStorage.setItem('json_launch_success', json_launch_success);
    const json_land_success = JSON.stringify(this.state.land_success);
      localStorage.setItem('json_land_success', json_land_success);
  
  }
  handleCheckChieldElement = (event) => {
    let launch_years = this.state.launch_years
    launch_years.forEach(launch_year => {
       if (launch_year.value === event.target.value)
       launch_year.isChecked =  event.target.checked
    })
    this.setState((prevState) => ({launch_years}))
    this.props.setLaunchYear(this.state.launch_years);

  }
  
  handleCheckRadioElement = (event) => {
    let launch_success = this.state.launch_success
    launch_success.forEach(launch_success => {
     
       if (launch_success.value === event.target.value){
        launch_success.isChecked =  event.target.checked
       }
       else {
        launch_success.isChecked = !event.target.checked;
       }
       
    })
    
   /* let land_success = this.state.land_success
    land_success.forEach(land_success => {
       if (land_success.value === event.target.value)
       land_success.isChecked =  event.target.checked
    })*/
    this.setState({launch_success})
    console.log(this.state.launch_success)
    this.props.setSuccessfulLaunch(this.state.launch_success);
    //this.setState({land_success})
  }
  handleCheckRadioElementLand = (event) => {

    let land_success = this.state.land_success
    land_success.forEach(land_success => {
       if (land_success.value === event.target.value)
       {
        land_success.isChecked =  event.target.checked
       }
       else{
        land_success.isChecked = !event.target.checked;
       }
      
    })
    this.setState({land_success});
   
    this.props.setSuccessfulLanding(this.state.land_success);
  }

  setRemoveFilters = (e) => {
    
    console.log(this.state);
   this.setState((prevState,prevProps)=> 
            {
              prevState.launch_years.forEach(element => {
                element.isChecked=false
              });
              prevState.launch_success.forEach(element => {
                element.isChecked=false
              });
              prevState.land_success.forEach(element => {
                element.isChecked=false
              });
             
            })
    
    this.props.setRemoveFilters()
  }

  render() {
    return (
     
        <div className="col-sm-3">
          <p className="card-header">Filters</p>
          <div className="card">
            <div className="row-cols-2 mb-4">
              
             
              <div className='cardtitle'> <p className="card-title">Launch year</p> </div> 
              {
                this.state.launch_years.map((launch_year) => {
                return <Checkbox key={launch_year.id} handleCheckChieldElement={this.handleCheckChieldElement}  {...launch_year} />;
              })
              }
              
             
             
             <div className='cardtitle'><p className="card-title">Successful Launch</p></div> 
              
             {
             
                this.state.launch_success.map((launch_success) => {
                return <Radiobox key= {launch_success.id} handleCheckRadioElement={this.handleCheckRadioElement}  {...launch_success} radioname={`launch_success`}/>;
              })
             }
             
            <div className='cardtitle'><p className="card-title">Successful Land</p></div>
             
              {
              
               this.state.land_success.map((land_success) => {
                return <Radiobox key= {land_success.id} handleCheckRadioElement={this.handleCheckRadioElementLand}  {...land_success} radioname={`land_success`} />;
              })
  
              }
             
            </div>
            <div className='wrapbutton'> <button className='button button--secondary' onClick={this.setRemoveFilters}>Remove </button></div>
          </div>
        </div>
      
    );
  }
}
const mapStateToProps = (state) => ({
  filters:state.filters
});

const mapDispatchToProps = (dispatch, props) => ({
  setLaunchYear: (launch_years) => dispatch(setLaunchYear(launch_years)),
  setSuccessfulLaunch:(launch_success) => dispatch(setSuccessfulLaunch(launch_success)),
  setSuccessfulLanding:(land_success) => dispatch(setSuccessfulLanding(land_success)),
  setRemoveFilters:() => dispatch(setRemoveFilters())
 
});


export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
