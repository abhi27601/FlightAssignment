//SET_TEXT_FILTER
export const setLaunchYear = (launch_years = []) => ({
    type: "SET_LAUNCH_YEAR",
    launch_years
  });
  
  //SORT_BY_AMOUNT
  export const setSuccessfulLaunch = (successful_launch = false) => ({
    type: "SET_SUCCESSFUL_LAUNCH",
    successful_launch
  });
  
  //SORT_BY_DATE
  export const setSuccessfulLanding = (successful_landing = false) => ({
    type: "SET_SUCCESSFUL_LANDING",
    successful_landing
  });
  