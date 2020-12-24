import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter,{history}  from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

import {firebase} from './firebase/firebase';
import { login,logout } from "./actions/auth";
import { startSetFlights } from "./actions/flights";
import '../node_modules/normalize.css';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './styles/styles.scss';

import 'react-dates/lib/css/_datepicker.css'
import LoadingPage from "./components/LoadingPage";
const store = configureStore();
store.subscribe(()=>{
    const state = store.getState();
    console.log(store.getState());
   // const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    //console.log(visibleExpenses);
})
//const expenseOne = store.dispatch(addExpense({description:'Water bill',amount:100,createdAt:1000}));
//const expensetwo = store.dispatch(addExpense({description:'Gas bill',amount:200,createdAt:4000}));
//store.dispatch(addExpense({description:'Rent',amount:350,createdAt:2000}));
//store.dispatch(addExpense({description:'Home',amount:400,createdAt:3000}));



 

const jsx= (
<Provider store = {store}>
    <AppRouter />
</Provider>
    )

ReactDOM.render( <LoadingPage />, document.getElementById('app'));

let hasRendered = false;
const renderApp =() => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
  //  ReactDOM.render(jsx, document.getElementById('app'));
}

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        console.log(user.uid)
        store.dispatch(login(user.uid))
        store.dispatch(startSetFlights()).then(() => {
            renderApp()
        })
        //renderApp()
       
        if(history.location.pathname === '/'){
            
            history.push('/dashboard');
            }
    }
    else { 
        store.dispatch(logout())
        console.log('logout');
        renderApp()
        history.push('/');
    }
})
