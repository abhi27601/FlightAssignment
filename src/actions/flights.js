export const setFlights = (flights) => ({
    type: "SET_FLIGHTS",
    flights,
  });
  
  export const startSetFlights = () => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return  fetch(`https://api.spacexdata.com/v3/launches?limit=100`)
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
      // ...then we update the users state
      .then((data) => {
        console.log(data);
        dispatch(setFlights(data))
        
      })
    };
  };