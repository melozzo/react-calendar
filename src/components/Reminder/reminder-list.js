import styles from './reminder.module.css';
import React from 'react';
import Reminder from './reminder'
import Moment from 'moment';

const ReminderList = ( props ) => {
    let eventList = props.events.map(( event,i )=> {
        return (
        
                
                        <Reminder 
                               onEditReminder = {() => props.onEditReminder(event)} 
                               onDeleteReminder={() => props.onDeleteReminder(event)}
                               date = {event.Arrival}
                               key={event.SiteID}
                               text={event.Name} 
                               time={Moment(event.Arrival ).format('hh: mm a')} 
                               importance={event.importance}
                             >
                        </Reminder>
                
                                  
     
                )
        });

return <div>
        {eventList}
</div>
}

export default ReminderList;

    