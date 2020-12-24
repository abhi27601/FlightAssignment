const flightsReducerDefaultState = [];

//EXPENSES REDUCER
const flightsReducer = (state = flightsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_FLIGHTS":
        return action.flights;
      //return [...state,...action.expenses]
      default:
        return state;
  }
}

export default flightsReducer;
