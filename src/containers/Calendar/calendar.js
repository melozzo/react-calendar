import React, { Component } from 'react';
import Moment from 'moment';
import Day from './../../components/Day/day';
import Modal from './../../components/Modal/modal'
import  Editor  from './../../components/Editor/editor'
import Nav from './../../components/Nav/nav'


export default class Calendar extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            today: Moment(),
            calendarDays: [],
            monthOfDays: [],
            calendarIndex:0,
            editedReminder : {
                text : "",
                time : "",
                importance: "",
                
                },
            isEditing: false,
            editedDayIndex: null,
            editedItemIndex:null
        }

       
      }

  
    hydrateMonth = ( today )=> {
        let month = today.month();
        let year = today.year();
        let dateString =  (month + 1 ).toString() + "/1/"+ year;
        let firstDay = Moment(dateString);
        let daysOfMonth = [];
        let dayNo = 1;
        let first = firstDay.day();
        let last = today.daysInMonth();
        let j =0;
        for ( j ;  j < 42; j++) {
            if(j < first || j > (first+ last -1) ){
                daysOfMonth.push( { dayno: null,events: [] } );                         
            }  
            else {
                daysOfMonth.push({ dayno: dayNo, events: [] });
                dayNo ++;
            }
        }

        return daysOfMonth;

       
    }

    componentDidMount() {
       let days =   this.hydrateMonth( Moment() )
       this.setState({calendarDays: days, monthOfDays:days, calendarDayIndex: 0 })
    }

    onNextMonth = () => {
        let month = this.state.today.month();
        let year = this.state.today.year();
        if( month == 11) {
            year++;
            month = 0;
        }
        else
            month++;

        let dateString =  (month + 1 ).toString() + "/1/"+ year;
        let firstDay = Moment(dateString);
        let lastDay = firstDay.daysInMonth();
        let startIndex = this.state.calendarIndex + 42;

        if( this.state.calendarDays.length <= startIndex) {
            let nextMonth = this.hydrateMonth(firstDay);
            let thirtyfiveMore = this.state.calendarDays.concat( nextMonth)
       
            this.setState( {calendarDays: thirtyfiveMore, monthOfDays : nextMonth , today: firstDay, calendarIndex: startIndex} )
        }
        else {
            this.setState( {monthOfDays : this.state.calendarDays.slice(startIndex, startIndex+42) , today: firstDay, calendarIndex: startIndex})

        }


       


    }

    onLastMonth = () => {
        let month = this.state.today.month();
        let year = this.state.today.year();
        if( month == 0) {
            year--;
            month = 11;
        }
        else
            month--;

        let dateString =  (month + 1 ).toString() + "/1/"+ year;
        let firstDay = Moment(dateString);
        let startIndex = this.state.calendarIndex - 42;

        if(  startIndex < 0  ) {
            let previousMonth = this.hydrateMonth(firstDay);
            let thirtyfiveMore = previousMonth.concat(this.state.calendarDays)
            startIndex = 0;
            this.setState( { calendarDays: thirtyfiveMore, monthOfDays : previousMonth , today: firstDay, calendarIndex: 0} )
        }
        else {
           
            this.setState( {monthOfDays : this.state.calendarDays.slice(startIndex, startIndex + 42) , today: firstDay, calendarIndex: startIndex})

        }

    }

    addReminderHandler = ( dayArrayIndex )=> {
        let newReminder = {text:"",time:null,importance:null}
        this.setState( {isEditing: true, editedDayIndex:dayArrayIndex, editedReminder : newReminder})
    }

    deleteReminderHandler = ( dayArrayIndex, reminderIndex )=> {      
        let copy = this.state.monthOfDays.slice();
        copy[dayArrayIndex].events.splice(reminderIndex,1);
        this.setState( {daysOfMonth: copy} );
     }
 
   editReminderHandler = ( dayArrayIndex, reminderIndex )=> {   
        let copy = this.state.monthOfDays.slice();
        let reminderToEdit = copy[dayArrayIndex].events[reminderIndex];
        this.setState({editedReminder: reminderToEdit, isEditing: true, editedDayIndex: dayArrayIndex, editedItemIndex: reminderIndex})
     }

     changeHandler = (event,propName) => {
        const reminder ={};
        for (var attr in this.state.editedReminder) {
            if (this.state.editedReminder.hasOwnProperty(attr)) 
            reminder[attr] = this.state.editedReminder[attr];
        }
        reminder[propName] = event.target.value;
        this.setState( {editedReminder:reminder})
    };

    saveReminderHandler = ( )=> {
      let copy = this.state.monthOfDays.slice();
      let day = this.state.editedDayIndex
      let item = this.state.editedItemIndex;
      let newReminder = {text:"",time:"",importance:""}
      if( item ){
        copy[day].events[item] = this.state.editedReminder;
      }
      else {
    
        copy[day].events.push(this.state.editedReminder)
        let sortedReminders = copy[day].events.sort( (a,b)=> {
                        
            return a.time - b.time }
             )
        copy[day].events = sortedReminders;
      }
       
      this.setState( {monthOfDays: copy,  editedReminder: newReminder, isEditing: false, editedDayIndex: null, editedItemIndex: null});
    }

    render () {
       

        let header = ( <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
        </tr>);
            let weeks = [0,1,2,3,4,5];
            let  month = weeks.map( i => {
                let start = i * 7;
                let weekdays = this.state.monthOfDays.slice( start,start+7).map( (day, i )=> {

                    return day.dayno !== null? (<td><Day 
                                                                            key={start + i}
                                                                            dayNo ={day.dayno} 
                                                                            dayIndex={start+i}
                                                                            events = {day.events}
                                                                            onEditReminder={this.editReminderHandler}
                                                                            onAddReminder={this.addReminderHandler}
                                                                            onDeleteReminder={this.deleteReminderHandler}></Day></td>): (<td></td>)
                })
                return  (<tr>{weekdays}</tr>);

            })
      
        return (
                    <div>
                        <Modal show={this.state.isEditing} >
                            <Editor  
                                    Reminder={this.state.editedReminder}
                                    onChange={this.changeHandler}
                                    onSaveReminder = {this.saveReminderHandler} />
                        </Modal>
                        <Nav 
                                next={ ()=>{this.onNextMonth() } }
                                previous={ ()=> {this.onLastMonth() } }
                                month={this.state.today.format('MMMM YYYY')} />
                   
                        <table className="calendar">
                                <tbody >
                                        {header}
                                        { month}
                                </tbody>
                        </table>
                    </div>
                );
    }


}


// const queryParams =[];
// queryParams.push(encodeURIComponent('text') + '=' + encodeURIComponent(this.state.Reminder.text))
// queryParams.push(encodeURIComponent('time') + '=' + encodeURIComponent(this.state.Reminder.time))
// queryParams.push(encodeURIComponent('importance') + '=' + encodeURIComponent(this.state.Reminder.importance))
// let queryString = queryParams.join('&')

// this.props.history.push({
//    pathname:"/",
//    search: '?' + queryString
// } );





    //     const queryParams =[];
    //     queryParams.push(encodeURIComponent('text') + '=' + encodeURIComponent(reminderToEdit.text))
    //     queryParams.push(encodeURIComponent('time') + '=' + encodeURIComponent(reminderToEdit.time))
    //     queryParams.push(encodeURIComponent('importance') + '=' + encodeURIComponent(reminderToEdit.importance))
    //     let queryString = queryParams.join('&')

    //    this.props.history.push({
    //        pathname:"/edit",
    //        search: '?' + queryString
    //    } );
       