import React from "react";
import { connect } from "react-redux";
import Checkbox from "./Checkbox";
import Radiobox from "./Radiobox";
import getVisibleFlights from "../selectors/getVisibleFlights";
import { setLaunchYear, setSuccessfulLanding , setSuccessfulLaunch } from "../actions/filters";

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
    {id: 16, value: "true", isChecked: true},
    {id: 17, value: "false", isChecked: false},
  ],
    land_success:[ {id: 18, value: "true", isChecked: true},
    {id: 19, value: "false", isChecked: false}
  ]
  };
  componentDidMount(prevprops,prevstate) {
    this.props.setLaunchYear(this.state.launch_years);
    this.props.setSuccessfulLaunch(this.state.launch_success);
    this.props.setSuccessfulLanding(this.state.land_success);
  }
  handleCheckChieldElement = (event) => {
    let launch_years = this.state.launch_years
    launch_years.forEach(launch_year => {
       if (launch_year.value === event.target.value)
       launch_year.isChecked =  event.target.checked
    })
    this.setState((prevState) => ({launch_years}))
    console.log(this.state.launch_years);
    this.props.setLaunchYear(this.state.launch_years);
  }
  
  handleCheckRadioElement = (event) => {
    let launch_success = this.state.launch_success
    launch_success.forEach(launch_success => {
      console.log(event.target);
      console.log(event.target.checked);
       if (launch_success.value === event.target.value){
        launch_success.isChecked =  event.target.checked
       }
       else {
        launch_success.isChecked = !launch_success.isChecked;
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
        land_success.isChecked = !land_success.isChecked;
       }
      
    })
    this.setState({land_success});
    console.log(land_success);
    this.props.setSuccessfulLanding(this.state.land_success);
  }

  /*handleCheckRadioElement = (event) => {
    let launch_success = this.state.launch_success
    launch_success.forEach(launch_success => {
       if (launch_success.value === event.target.value)
       launch_success.isChecked =  event.target.checked
    })
    this.setState({launch_success})
  }*/


  render() {
    return (
      <div className="row p-4">
        <div className="col">
          <p className="card-header">Filters</p>
          <div className="card">
            <div className="row-cols-2 mb-4">
              
              
              <h5 className="card-title">Launch year</h5>
              {
                this.state.launch_years.map((launch_year) => {
                return <Checkbox key= {launch_year.id} handleCheckChieldElement={this.handleCheckChieldElement}  {...launch_year} />;
              })
              }
              <h5 className="card-title">Successful Launch</h5>
             {
             
                this.state.launch_success.map((launch_success) => {
                return <Radiobox key= {launch_success.id} handleCheckRadioElement={this.handleCheckRadioElement}  {...launch_success} radioname={`launch_success`}/>;
              })
             }
             <h5 className="card-title">Successful Land</h5>
              {
              
               this.state.land_success.map((land_success) => {
                return <Radiobox key= {land_success.id} handleCheckRadioElement={this.handleCheckRadioElementLand}  {...land_success} radioname={`land_success`} />;
              })
  
              }
             
            </div>
              

          </div>
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
  setSuccessfulLanding:(land_success) => dispatch(setSuccessfulLanding(land_success))
 // sortByDate: () => dispatch(sortByDate()),
  //sortByAmount: () => dispatch(sortByAmount()),
  //setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  //setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
