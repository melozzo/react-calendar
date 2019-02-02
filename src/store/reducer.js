import * as actionTypes from './action-types'

const initialState = {
    Activities: []
}

const reducer = ( state = initialState , action) => {

    switch( action.type) {
        case actionTypes.ACTIVITIES_FETCHED :
            return { ...state,
            Activies: state.Activities.concat( action.data )}


    }


    return state;
}

export default reducer