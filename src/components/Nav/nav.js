import React from 'react';
import './nav.css'

const MonthName  =(props) => {
        return (
           <p className="prevnext">
                
                    <a href="#" onClick = { props.previous} >{'<< previous'}</a>
                    <span style={{fontSize:'40px'}}>{props.month}</span>
                    <a href="#" onClick={props.next}>{'next >>'}</a>
                

                </p>
               
           
        );

    }

    export default MonthName