import moment from "moment";

//Get visible expenses
const getVisibleExpenses = (flights, {launch_years,successful_launch,successful_landing}) => {
  const flight_launch_year = []
  console.log(flights);
  console.log(launch_years);
  console.log(successful_launch);
  console.log(successful_landing);
 // flights.reduce(obj,)
  
 /*let result = flights.filter((flight) => {
  return launch_years.reduce((arr,eachyear) => {
    console.log(eachyear.value == flight.launch_year);
     if( eachyear.value == flight.launch_year) {
       
        return{...flight}
     }

  },[])
  
}) */
let result = flights.filter(o1 => launch_years.some(o2 => o1.launch_year === o2.value));
let successful_launch_filter = flights.filter(o1 => successful_launch.some(o2 => o1.launch_success === JSON.parse(o2.value)));
let successful_landing_filter = flights.filter(o1 => successful_landing.some(o2 => JSON.parse(o2.value) === o1.rocket.first_stage.cores[0].land_success));
//let successful_landing = flights.filter(o1 => successful_landing.some(o2 => o1.launch_year === o2.value));



console.log(successful_launch_filter);
console.log(successful_landing_filter);

/*
let result1 = flights.filter((flight) => {
  //let arr=[]
  return launch_years.filter((eachyear) => {
    console.log(eachyear.value == flight.launch_year);
     if( eachyear.value == flight.launch_year) {
      return flight
     }

  },[])
})
*/

/*let result1 = flights.reduce((arr,flight) => {
  return launch_years.filter((eachyear) => {
    console.log(eachyear.value == flight.launch_year);
     if( eachyear.value == flight.launch_year) {
        return [arr.push(flight)]
     }

  },[])
})*/
console.log(result);


return flights;

//console.log(result1)
 /*var result = flights.filter(function(o1){
  // filter out (!) items in result2
  return result2.some(function(o2){
      return o1.id === o2.id;          // assumes unique id
  });*/
  
  //   .includes(successful_launch.value);
      //const successful_launch = 
     /* launch_years.map((launch_year) => {
         if(launch_year.value == flight.launch_year) {
           flight_launch_year.push(flight)
         }
      }) */
    /*  const arrayToObject = (array, keyField) =>
   array.reduce((obj, item) => {
     obj[item[keyField]] = item
     return obj
   }, {})*/
   
     
   
    
   
    
};

export default getVisibleExpenses;
