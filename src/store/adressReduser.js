const defaultState={
    adress:[]
}

const ADD_ADRESS="ADD_ADRESS"
const REMOVE_ADRESS="REMOVE_ADRESS"

export const adressReducer=(state=defaultState, action)=>{
    switch(action.type){
        case ADD_ADRESS:
            return {...state, adress:[...state.adress, action.payload]}
        case REMOVE_ADRESS: 
            return{...state, adress:state.adress.filter(adress=>adress.id !==adress.payload)} 
        default:
            return state 
    }
}

export const addAressAction=(payload)=>({type:ADD_ADRESS, payload})
export const removeAressAction=(payload)=>({type:REMOVE_ADRESS, payload})


