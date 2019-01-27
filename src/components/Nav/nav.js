import React , {Component} from 'react';
import './nav.css'

const Nav  =(props) => {
        return (
            <div className = "nav">
                <ul>
                    <li><a href="#" onClick = { props.previous} >{'<< previous'}</a></li>
                    <li><span style={{fontSize:'40px'}}>{props.month}</span></li>
                    <li><a href="#" onClick={props.next}>{'next >>'}</a></li>
                </ul>


               
            </div>
        );

    }

    export default Nav