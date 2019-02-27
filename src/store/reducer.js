import * as actionTypes from './action-types'

const initialState = {
    Activities: []
}

const reducer = ( state = initialState , action) => {

    switch( action.type) {
        case actionTypes.ACTIVITIES_FETCHED :
            return { Activities: state.Activities.concat( action.data)}

        case actionTypes.ADD_REMINDER :
            return { Activities: state.Activities.concat( action.data)}
        
        case actionTypes.DELETE_REMINDER :
            return { Activities: state.Activities.filter( item => item.SiteID !== action.data ) }
               
        case actionTypes.UPDATE_REMINDER:
            return{Activities: state.Activities.map((item) => {
                                                                        if (item.SiteID !== action.data.SiteID) 
                                                                            return item
                                                                        else 
                                                                            return action.data
                                                                    })
        }

        default:  return state;
    }
}

export default reducer