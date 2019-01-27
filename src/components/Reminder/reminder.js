import React from 'react';
import  './reminder.css';


const Reminder = (props) => {

        let colorClass;
        switch(props.importance){
                case "Red":
                colorClass = "bgRed";
                break;
                case "Green":
                colorClass = "bgGreen";
                break;
                case("Yellow"):
                colorClass = "bgYellow";
                break;
            }
        
    return (
        <div className={colorClass}>
           
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