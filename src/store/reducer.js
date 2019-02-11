import * as actionTypes from './action-types'

const initialState = {
    Activities: ["mounse"]
}

const reducer = ( state = initialState , action) => {

    switch( action.type) {
        case actionTypes.ACTIVITIES_FETCHED :
            return { Activities: state.Activities.concat( action.data)}


        default:  return state;
    }
}

export default reducer