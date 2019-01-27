import React, {Component} from 'react';
import  './reminder.css';


const Reminder = (props) => {

    return (
        <div>
           
                <div className="remindertime">
                        {props.time} 
                </div> 
                <div className="remindertext">
                        {props.text }
                </div>
              
        </div>
        
    )
}

export default Reminder