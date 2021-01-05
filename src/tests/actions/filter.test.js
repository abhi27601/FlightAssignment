import { setLaunchYear } from "../../actions/filters";
test('should generate launch years action object' , () => {
    const launch_years = [
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
      ];
    const action = setLaunchYear(launch_years);
    expect(action).toEqual({
        type:'SET_LAUNCH_YEAR',
        launch_years
    })
})


test('should generate launch years action object' , () => {
    const launch_years = [
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
      ];
    const action = setLaunchYear(launch_years);
    expect(action).toEqual({
        type:'SET_LAUNCH_YEAR',
        launch_years
    })
})