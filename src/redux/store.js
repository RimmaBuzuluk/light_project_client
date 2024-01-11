import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit"
import {addressReducer} from "./slice/adressReduser"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { authReducer } from "./slice/authReduser"
import { cityReducer } from "./slice/cityReduser"




const rootReducer=combineReducers({
        address:addressReducer,
        auth:authReducer,
        city:cityReducer
})

export const store= configureStore({
    reducer:rootReducer
    
},composeWithDevTools(applyMiddleware(thunk)))