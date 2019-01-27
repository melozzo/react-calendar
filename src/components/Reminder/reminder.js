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
        <p style={{margin:'0px', textAlign: 'center'}} className={colorClass }>
           
                <div className="remindertime">
                        {props.time} 
                </div> 
                <div className="remindertext">
                        {props.text }
                </div>
                <button 
                            onClick={()=>props.onEdit(props.dayIndex, props.itemIndex)}>edit</button>
                <button
                            onClick={()=>props.onDelete(props.dayIndex, props.itemIndex)}>delete</button>
              
        </p>
        
    )
}

export default Reminder