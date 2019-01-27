import React, {Component} from 'react';
import  './day.css'
import Reminder from '../Reminder/reminder'

const Day= (props) => {

    let  colorClass;

    
    

    let eventList = props.events.map(( event,i )=> {
        return (<div >
                        <Reminder key={i} text={event.text} time={event.time} importance={event.importance}></Reminder>
                        <div >
                        <button
                            onClick={()=>props.onEditReminder(props.dayIndex, i)}>edit</button>
                        <button
                            onClick={()=>props.onDeleteReminder(props.dayIndex, i)}>delete</button>
                    </div>
              </div>
                )
        });

    
   

    return (
    <div className="day">
      
       <button style={{float:'right', marginRight:'5px' ,marginTop:'3px'}} onClick={() => props.onAddReminder(props.dayIndex)} className="btnAdd">Add Reminder</button>
       <div style={{fontWeight:'bold',float:'left',  marginLeft:'5px'}}>{props.dayNo}</div>
       <br/>
       <div className="reminderList">
           
           {eventList}
       </div>
     
  
 
    
    </div>
    )
  

}

export default Day;


