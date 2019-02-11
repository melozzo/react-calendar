import React, { Component } from 'react';
import './editor.css'

const Editor = (props) => {

        return ( <div className="editor">
                    <form >
                            <label>Reminder </label> 
                            <div>     
                                        <input required maxLength="30" name="content" placeholder={"something to remember"}
                                        value={props.Reminder.text} onChange={ (event)=>{props.onChange(event,'text')} }></input>
                            </div> 
                            <label>Time</label>
                            <div>   
                                            <input  required type="time" name="time" value={props.Reminder.time}
                                           
                                             onChange={ (event)=>{props.onChange(event,'time')} }></input>
                            </div>
                    
                            <label>Importance</label> 
                            <div>    
                                            <select required name="importance" value={props.Reminder.importance} 
                                            onChange={ (event)=>{props.onChange(event,'importance')} }>
                                            <option  value="None">None Selected</option>
                                                <option  value="Red">Red</option>
                                                <option value="Green">Green</option>
                                                <option value="Yellow">Yellow</option>
                                            </select>
                            </div> 
                          
                                           
                        </form>   
                        <div style={{textAlign: 'center'}}>
                            <button 
                              onClick={ () => {props.onSaveReminder(props.Reminder)}}>SAVE EDIT</button>

                            </div>   
                    </div>
                 );
    }


export default Editor;


   

    // componentDidMount() {
    //     const q = new URLSearchParams(props.location.search);
    //     const reminder = {};
    //     for( let param of q.entries()) {
    //         reminder[param[0]] = param[1]
    //     }

    //     setState ( { Reminder: reminder} )
    // }