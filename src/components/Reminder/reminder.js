import React  from 'react';
import styles from  './reminder.module.css';


const Reminder = (props) => {

        let colorClass;
        switch(props.importance){
                case "Red":
                colorClass = styles.bgRed;
                break;
                case "Green":
                colorClass = styles.bgGreen;
                break;
                case("Yellow"):
                colorClass = styles.bgYellow;
                break;
            }
        
    return (
        <div style={{textAlign:"center"}} className={[colorClass ]}>
           
                <div className={styles.remindertime}>
                        {props.time} 
                </div> 
                <div className={styles.remindertext}>
                        {props.text }
                </div>
                <button 
                            onClick={()=>props.onEditReminder(props.dayIndex, props.itemIndex)}>edit</button>
                <button
                            onClick={()=>props.onDeleteReminder(props.dayIndex, props.itemIndex)}>delete</button>
              
        </div>
        
    )
}

export default Reminder