import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit"
import {adressReducer} from "./slice/adressReduser"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"




const rootReducer=combineReducers({
        adress:adressReducer
})

export const store= configureStore({
    reducer:rootReducer
    
},composeWithDevTools(applyMiddleware(thunk)))