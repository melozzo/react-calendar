import React from 'react';
import './nav.css'

const MonthName  =(props) => {
        return (
           <p className="prevnext">
                
                    <button onClick = { props.previous} >{'<< previous'}</button>
                    <span style={{fontSize:'40px'}}>{props.month}</span>
                    <button onClick={props.next}>{'next >>'}</button>
                

                </p>
               
           
        );

    }

    export default MonthName