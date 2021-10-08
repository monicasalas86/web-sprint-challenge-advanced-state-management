import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';
// export const ADD_SMURF = 'ADD_SMURF';
// export const ADD_ERROR = 'ADD_ERROR';


export const fetchSmurfs = () => dispatch => {
    // thunk action that triggers loading status
    dispatch({ type:FETCH_SMURF_START });
    // axios call to retrieve smurfs from server
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            // console.log(res.data)
            dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            // console.log(err);
            dispatch({type: FETCH_SMURF_FAIL, payload: 'ERROR: no smurfs found'})
        })
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.