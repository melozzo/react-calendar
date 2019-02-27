import React, { Fragment} from 'react';
import  styles from './day.module.css'
import ReminderList from '../Reminder/reminder-list'


// interface DayProps {
//     DayDate : Date,
//     onAddReminder : any

// }



const Day= (props) => {


    return (
        <Fragment>
            <div className={styles.monthNo}>{props.dayNo}</div>
          <button className={styles.reminderBtn} onClick={() => props.onAddReminder(props.MomentDate)} >Add Reminder</button> 
         
           <br/> 
         <div id="reminderContainer" className={styles.reminderContainer}>
               <ReminderList class={styles.reminderContainer}
                        events = {props.events } 
                        onEditReminder= {props.onEditReminder} 
                        onDeleteReminder={props.onDeleteReminder}
                        dayIndex = {props.dayIndex}>
                </ReminderList>
                </div>
        </Fragment>
        )
      

    return (
    <Fragment>
        <div className={styles.monthNo}>{props.dayNo}</div>
      <button className={styles.reminderBtn} onClick={() => props.onAddReminder(props.dayIndex)} >Add Reminder</button> 
     
       <br/> 
     <div id="reminderContainer" className={styles.reminderContainer}>
           <ReminderList class={styles.reminderContainer}
                    events = {props.events } 
                    onEditReminder= {props.onEditReminder} 
                    onDeleteReminder={props.onDeleteReminder}
                    dayIndex = {props.dayIndex}>
            </ReminderList>
            </div>
    </Fragment>
    )
  

}

export default Day;


