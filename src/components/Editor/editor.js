import React, { Component } from 'react';
import './editor.css'

export default class Editor extends Component {
    
    constructor(props){
        super(props)
    }

    render() {
        return ( <div className="editor">
                    <form>
                            <label>Reminder </label>       
                                        <input required maxLength="30" name="content" placeholder={"something to remember"}
                                        value={this.props.Reminder.text} onChange={ (event)=>{this.props.onChange(event,'text')} }></input>
                            <label>Time</label>   
                                            <input   type="time" name="time" value={this.props.Reminder.time}
                                            placeholder={"12:00"}
                                             onChange={ (event)=>{this.props.onChange(event,'time')} }></input>
                            
                    
                            <label>Importance</label>      
                                            <select required name="importance" value={this.props.Reminder.importance} onChange={ (event)=>{this.props.onChange(event,'importance')} }>
                                            <option  value="None">None Selected</option>
                                                <option  value="Red">Red</option>
                                                <option value="Green">Green</option>
                                                <option value="Yellow">Yellow</option>
                                            </select>
                                    
                                            <button onClick={ () => {this.props.onSaveReminder(this.props.Reminder)}}>SAVE EDIT</button>
                        </form>      
                    </div>
                 );
    }


}


   

    // componentDidMount() {
    //     const q = new URLSearchParams(this.props.location.search);
    //     const reminder = {};
    //     for( let param of q.entries()) {
    //         reminder[param[0]] = param[1]
    //     }

    //     this.setState ( { Reminder: reminder} )
    // }