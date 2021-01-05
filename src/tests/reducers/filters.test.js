import filtersReducer from "../../reducers/filters";
import moment from "moment";

//type:@@INIT by default 

test('should setup default filter values',() => {
    const state = filtersReducer(undefined,{ type:'@@INIT'});
    
    expect(state).toEqual({
       launch_years: [],
       successful_landing: [],
       successful_launch: [],
    })

})


test('should setup filter for set launch year',() => {
    const state = filtersReducer(undefined,{ type:'SET_LAUNCH_YEAR', 
    launch_years:[{id: 1, value: "2006", isChecked: true},
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
    {id: 15, value: "2020", isChecked: false}]
});
    
    expect(state).toEqual({
        launch_years:[{id: 1, value: "2006", isChecked: true}],
        successful_landing: [],
        successful_launch: [],
    })

})


test('should setup filter for set successful launch',() => {
    const state = filtersReducer(undefined,{ type:'SET_SUCCESSFUL_LAUNCH', 
    successful_launch:[
        {id: 16, value: "true", isChecked: true},
        {id: 17, value: "false", isChecked: false},
      ]
});
    
    expect(state).toEqual({
        launch_years:[],
        successful_launch: [{id: 16, value: "true", isChecked: true}],
        successful_landing: [],
    })

})

test('should setup filter for set successful landing',() => {
    const state = filtersReducer(undefined,{ type:'SET_SUCCESSFUL_LANDING', 
    successful_landing:[
        {id: 18, value: "true", isChecked: true},
        {id: 19, value: "false", isChecked: false},
      ]
});

    expect(state).toEqual({
        launch_years:[],
        successful_landing: [{id: 18, value: "true", isChecked: true}],
        successful_launch: [],
    })

})
/*
test('should setup sort by text filter values',() => {
    const state = filtersReducer(undefined,{ type:'SET_TEXT_FILTER' , text:'abc123'});
    
    expect(state).toEqual({
        text:'abc123',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })

})


test('should setup sort by date  filter values',() => {
    const currentState= {
        text:'',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month'),
        sortBy:'amount'
    }
    
    const state = filtersReducer(currentState,{ type:'SORT_BY_DATE'});
    
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })

})

test('should setup sort by startDate  filter values',() => {
    const state = filtersReducer(undefined,{ type:'SET_START_DATE', startDate:moment(0).add(2,'days')});
    
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment(0).add(2,'days'),
        endDate:moment().endOf('month')
    })

})
test('should setup sort by startDate  filter values',() => {
    const state = filtersReducer(undefined,{ type:'SET_END_DATE', endDate:moment(0).add(2,'days')});
    
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        endDate:moment(0).add(2,'days'),
        startDate:moment().startOf('month')
    })

}) */

