import React from 'react';
import './nav.css'

const MonthName  =(props) => {
        return (
           <div className="prevnext">
                <ul>
                    <li><a href="#" onClick = { props.previous} >{'<< previous'}</a></li>
                    <li><span style={{fontSize:'40px'}}>{props.month}</span></li>
                    <li><a href="#" onClick={props.next}>{'next >>'}</a></li>
                </ul>

                </div>
               
           
        );

    }

    export default MonthName