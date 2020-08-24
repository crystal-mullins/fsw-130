const redux = require("redux")



function phoneNumber(phone) {
    return {
        type: "PHONE_NUMBER",
        payload: phone
    }
}

function addNewContact(contact){
    return {
        type: "ADD_NEW_CONTACT",
        payload: contact
    }

}
function email(email) {
    return {
        type: "EMAIL",
        payload: email
    }
}

function removeContact(contact){
    return {
        type: "REMOVE_CONTACT",
        payload: contact
    }

}

const initialState = {
    phone: 0,
    contactList: [] 
}



function reducer(state = initialState,  action) {
    // return new state based on the incoming action.type
    switch(action.type) {

        case "PHONE_NUMBER":
            return{
                ...state,
                phone: [state.phone,  action.payload]
            }
            case "ADD_NEW_CONTACT":
                return{
                    ...state,
                    contact: [ ...state.contactList, action.payload]
                }
                case "EMAIL":
                    return{
                        ...state,
                        email: [state.email,  action.payload]
                    }
                case "REMOVE_CONTACT":
                    const updatedArr = state.contactList.filter(contact => contact.toLowerCase() !== action.payload.toLowerCase())
                    return{
                        ...state,
                        contactList: updatedArr
                    }
      
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(phoneNumber("555-2345"))
store.dispatch(addNewContact("Crystal"))
store.dispatch(email("go4crystal@gmail"))

store.dispatch(phoneNumber("555-2225"))
store.dispatch(addNewContact("John"))
store.dispatch(email("go4jon@love.mail"))



store.dispatch(phoneNumber("555-2555"))
store.dispatch(phoneNumber("555-2565"))


store.dispatch(phoneNumber("555-2225"))


store.dispatch(addNewContact("Star"))


store.dispatch(email("go4crystal@gmail"))

store.dispatch(email("keepitreal@gitit.eud"))

store.dispatch(removeContact("jonny"))
store.dispatch(removeContact("crystal"))

