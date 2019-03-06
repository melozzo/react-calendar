import React, { Component, Fragment  } from 'react';
import Moment from 'moment';
import Day from './../../components/Day/day';
import Modal from './../../components/Modal/modal'
import  Editor  from './../../components/Editor/editor'
import MonthName from './../../components/Nav/nav'
import styles from  './calendar.module.css'
import { connect } from 'react-redux';
import * as actionCreators from './../../store/actionCreators'
import * as actionTypes from './../../store/action-types'

class Calendar extends Component {

    state={
        today: Moment(),
        month: Moment().month(),
        showEditor: false,
        editedReminder: {},
        isUpdate:false
    }

    componentDidMount() {

        this.props.getEvents();

    }


    getFirstDayOfMonth = (today) => {
        let month = today.month();
        let year = today.year();
        let dateString =  (month + 1 ).toString() + "/1/"+ year;
        let firstDay = Moment(dateString);
        return firstDay;
    }


    getFirstDayOfCalendar = (firstDayOfMonth) => {
        let daysToAdd = firstDayOfMonth.day();
        let firstDateOfCalendar = firstDayOfMonth.add(- daysToAdd, 'days');
       return firstDateOfCalendar;
    }


    getEventsFor = ( mDay ) => {
     let mel =  this.props.Events.filter(  function(item) {
         let match = false;
         let notNull =  item.Arrival != null;
         if(notNull)
            match = mDay.isSame(Moment(item.Arrival), 'day')
         return   notNull === true && match === true;
     });

        return mel.sort(  (a,b)=> {
            if(Moment(a.Arrival).isBefore(Moment(b.Arrival)) )
            return -1
            if( Moment(a.Arrival).isSame(Moment(b.Arrival)) )
            return 0;
            else
            return 1;
         } );
    }


    hydrateMonth = ( today )=> {
        let firstDayOfMonth = this.getFirstDayOfMonth( today );
        let calendarDay = this.getFirstDayOfCalendar(firstDayOfMonth);
        let calendarDays = [];

         for ( let j = 0;  j < 42; j++) {
             let daysEvents = this.getEventsFor(calendarDay);
             let dayNo = calendarDay.month() == this.state.month ? calendarDay.format('D'): null;
             let cloneCopy = calendarDay.clone();
             calendarDays.push({ mDate:cloneCopy, events: daysEvents, dayNo: dayNo });
             calendarDay.add(1, 'days');
         }

        return calendarDays;
    }

  
    addReminderHandler = ( reminderMomentDate )=> {
        let m = Moment().format('mmss');
        let generatedID = Math.random() * parseInt(m)
        this.setState({showEditor: true, 
        editedReminder: { SiteID: generatedID, Name: null, Arrival: reminderMomentDate, importance: null }} )
    }

    deleteReminderHandler = ( reminderToDelete )=> {      
        this.props.deleteEvent(reminderToDelete.SiteID);
     }
 
    editReminderHandler = ( reminderToEdit )=> {   
        this.setState({editedReminder: reminderToEdit, showEditor: true, isUpdate: true})
     }

     changeHandler = (event,propName) => {
        let clonedState = {...this.state.editedReminder}
        clonedState[propName] = event.target.value;
        this.setState( {editedReminder:clonedState})
    };


    changeTimeHandler = (event, arrivalDate ) => {
        let timeString = event.target.value;
        let dateString = Moment(arrivalDate).format('MM DD YYYY');
        let update = dateString + " " + timeString;
        let updatedDate = Moment(update)
        let clonedReminder = {...this.state.editedReminder};
        clonedReminder["Arrival"]=updatedDate.format('MM DD YYYY HH:mm');
        this.setState( {editedReminder:clonedReminder})
    };

    saveReminderHandler = () => {
        if ( this.state.isUpdate === true) {
            this.props.updateEvent(this.state.editedReminder);
            this.setState({isUpdate: false})
        }
        else {
            this.props.addEvent(this.state.editedReminder)
        }
        this.setState({showEditor: false})
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

        this.setState({today: firstDay, month: firstDay.month()});

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

        this.setState({today: firstDay, month: firstDay.month()});
        
    }
  
  
     render () {
        if( this.props.Events != null ){

        let monthOfDays = this.hydrateMonth( this.state.today)
       
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
                let weekdays = monthOfDays.slice( start,start+7).map( (day, i )=> {
               

                   return day.dayNo !== null? (
                         <td><Day 
                                        key={start + i}
                                        dayNo ={day.dayNo} 
                                        MomentDate = { day.mDate}
                                        events = {day.events}
                                        onEditReminder={this.editReminderHandler}
                                        onAddReminder={this.addReminderHandler}
                                        onDeleteReminder={this.deleteReminderHandler}></Day></td>): (<td></td>)
                })
                return  (<tr key={Math.random() + Moment().format('mmss')}>{weekdays}</tr>);

            })
      
        return (   
                   <Fragment>
               
                         <Modal show={this.state.showEditor} >
                            <Editor  
                                    Reminder={this.state.editedReminder}
                                    onChange={this.changeHandler}
                                    onChangeTime = {(e) => this.changeTimeHandler( e, this.state.editedReminder.Arrival )}
                                    onSaveReminder = { ()=> { this.saveReminderHandler() } }/>
                        </Modal> 
                         <MonthName
                                next={ ()=>{this.onNextMonth() } }
                                previous={ ()=> {this.onLastMonth() } }
                                month={this.state.today.format('MMMM YYYY')} />  
                   
                        <table id="calendarTable" className={styles.calendar}>
                                <tbody >
                                        {header}
                                        { month}
                                </tbody>
                        </table>
                    </Fragment> 
                );
        }       
        else 
            return ( <div>you suck</div>);

    }





}
 

const mapStateToProps = state => {
    return {
        Events: state.Activities
    }
};
   

const mapPropsToActions  =  dispatch  => {
    return {
        getEvents: () => dispatch( actionCreators.fetchActivities()  ),

        addEvent: ( event ) => dispatch({ type: actionTypes.ADD_REMINDER, 
                                                           data: event } ),

        deleteEvent: (event) => dispatch({type: actionTypes.DELETE_REMINDER,
                                                            data: event}),

        updateEvent: (event) => dispatch({type: actionTypes.UPDATE_REMINDER, data: event})
    }
    
};


export default ( connect(mapStateToProps, mapPropsToActions ) )( Calendar );

