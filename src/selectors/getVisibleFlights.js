import moment from "moment";

//Get visible expenses
const getVisibleExpenses = (flights, {launch_years,successful_launch,successful_landing}) => {
  const flight_launch_year = []
  
let result = flights.filter(o1 => launch_years.some(o2 => o1.launch_year === o2.value));
let successful_launch_filter = flights.filter(o1 => successful_launch.some(o2 => o1.launch_success === JSON.parse(o2.value)));
let successful_landing_filter = flights.filter(o1 => successful_landing.some(o2 => JSON.parse(o2.value) == o1.rocket.first_stage.cores[0].land_success));
let succ_launch_land = successful_launch_filter.filter(o1 => successful_landing_filter.some(o2 => o1.flight_number === o2.flight_number));
let succ_launch_year = result.filter(o1 => successful_launch.some(o2 => o1.launch_success === JSON.parse(o2.value)));
let succ_land_year = result.filter(o1 => successful_landing.some(o2 => JSON.parse(o2.value) == o1.rocket.first_stage.cores[0].land_success));
let all_3_filters = succ_launch_land.filter(o1 => result.some(o2 => o1.flight_number === o2.flight_number));

if(launch_years.length > 0 && successful_launch.length > 0 && successful_landing.length > 0) {
    return all_3_filters;
}
else if(launch_years.length == 0 && successful_launch.length > 0 &&  successful_landing.length > 0 ) {
   // return succ_launch_land;
   return succ_launch_land;
}
else if(launch_years.length > 0 && successful_launch.length == 0 &&  successful_landing.length > 0 ) {
  return succ_land_year;
}
else if (launch_years.length > 0 && successful_launch.length > 0 &&  successful_landing.length == 0 ) {
  return succ_launch_year
}
else if (launch_years.length > 0 && successful_launch.length == 0 &&  successful_landing.length == 0){
  return result;
}
else if (launch_years.length == 0 && successful_launch.length > 0 &&  successful_landing.length == 0) {
  return successful_launch_filter;
}
else if (launch_years.length == 0 && successful_launch.length == 0 &&  successful_landing.length > 0) {
  return successful_landing_filter;
}
else if(launch_years.length == 0 && successful_launch.length == 0 &&  successful_landing.length == 0){
  return flights
}
    
};

export default getVisibleExpenses;
