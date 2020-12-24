import moment from "moment";
const filtersDefaultState = {
  launch_years: [],
  successful_launch:[],
  successful_landing:[]
};
export default (state = filtersDefaultState, action) => {
  switch (action.type) {
    case "SET_LAUNCH_YEAR":
      return {
            ...state,
            launch_years: action.launch_years.filter((launch_year) => launch_year.isChecked == true)
      }
    case "SET_SUCCESSFUL_LAUNCH":
      return {...state, 
        successful_launch: action.successful_launch.filter((successful_launch) => successful_launch.isChecked == true) 
      }
    case "SET_SUCCESSFUL_LANDING":
      return {
        ...state,
        successful_landing:action.successful_landing.filter((successful_landing) => successful_landing.isChecked == true)
      }
    default:
      return state;
  }
};
