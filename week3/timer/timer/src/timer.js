
const redux = require("redux")

function increment(){
    return {
        type: "INCRIMENT"
    }
}

function decrement(){
    return {
        type: "DECRIMENT"
    }
}

function Reducer(state = {count: 0}, action) {
    // return new state baised on incoming action
    switch(action.type){
        case "INCRIMENT":
            return{
                count: state.count + 1
            }
            case "DECREMENT":
                return{
                    count: state.count - 1
                }
                default:
                    return state
    }
}
export default Reducer