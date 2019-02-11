import styles from './reminder.module.css';
import React from 'react';
import Reminder from './reminder'


const ReminderList = ( props ) => {
    let eventList = props.events.map(( event,i )=> {
        return (
        
                
                        <Reminder 
                               onEditReminder = {props.onEditReminder} 
                               onDeleteReminder={props.onDeleteReminder}
                               dayIndex = {props.dayIndex} 
                               itemIndex={i}
                               key={Math.random()}
                               text={event.text} 
                               time={event.time} 
                               importance={event.importance}>
                        </Reminder>
                
                                  
     
                )
        });

return <div>
        {eventList}
</div>
}

export default ReminderList;

    