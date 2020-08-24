// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// import React from 'react';
// import Reducer from './timer'
// import './App.css';
const redux = require("redux")



function changeCount(amount) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}

function addFavroiteThing(thing){
    return {
        type: "ADD_FAVROITE_THING",
        payload: thing
    }

}

function removeFavroiteThing(thing){
    return {
        type: "REMOVE_FAVROITE_THING",
        payload: thing
    }

}

const initialState = {
    count: 0,
    favroiteThings: []
}



function reducer(state = initialState,  action) {
    // return new state based on the incoming action.type
    switch(action.type) {

        case "CHANGE_COUNT":
            return{
                ...state,
                count: state.count + action.payload
            }
            case "ADD_FAVROITE_THING":
                return{
                    ...state,
                    favroiteThings: [ ...state.favroiteThings, action.payload]
                }
                case "REMOVE_FAVROITE_THING":
                    const updatedArr = state.favroiteThings.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase())
                    return{
                        ...state,
                        favroiteThings: updatedArr
                    }
      
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(changeCount(-5))
store.dispatch(addFavroiteThing("stuff"))
store.dispatch(addFavroiteThing("thing"))


store.dispatch(removeFavroiteThing("thing"))


