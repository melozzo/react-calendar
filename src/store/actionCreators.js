import Axios from 'axios';
import * as actionTypes from './action-types'



const activitiesFetched = ( data ) => {
    return {
        type: actionTypes.ACTIVITIES_FETCHED,
        data: data
    }

}

export const fetchActivities = ( ) => {
    return ( dispatch, getState ) => {
        Axios.get("http://localhost/TraveloggiaServices/api/SiteList/22282")
        .then( response => {
            console.log(response);
            dispatch( activitiesFetched( response.data ));
        });

    }
   

    
}