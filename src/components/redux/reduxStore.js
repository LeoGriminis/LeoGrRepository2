import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogReducer";
import UsersReducer from "./usersReducer";


let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer : dialogsReducer,
    usersPage : UsersReducer

})

let store = createStore(reducers)

window.store = store

export default store

