import { FETCH_SMURF_START, FETCH_SMURF_FAIL, FETCH_SMURF_SUCCESS, ADD_SMURF, SET_ERROR } from "../actions";

export const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action)=>{
    // console.log('reducer', action);
    switch(action.type) {
        // loading state
        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        // successful state
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            }
        // error state
        case FETCH_SMURF_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        // adding a smurf
        case ADD_SMURF:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload],
                isLoading: false,
                error: ''
            }
        // adds a value to error message
        case SET_ERROR:
            return {
                ...state,
                smurfs: [...state.smurfs],
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.