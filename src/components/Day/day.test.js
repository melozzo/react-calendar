import React from 'react';
import { configure, shallow } from 'enzyme';
import  Adapter from 'enzyme-adapter-react-16';
import Day from './day'
import ReminderList  from '../Reminder/reminder-list';


configure({ adapter: new Adapter() });

describe('Day Component Test Suite', () => {



        let wrapper;
        beforeEach( () => {
            wrapper=shallow(<Day />);
            wrapper.setProps( {
            dayNo :1,
            dayIndex:1,
            events :[ {
                time: '4:00 pm',
                text:'you are wrong',
                importance: 'Green'
            }],
            onEditReminder:{},
            onAddReminder:{},
            onDeleteReminder:{},
            })

        })

        it('should render event list', () => {
         expect(wrapper.find(ReminderList)).toHaveLength(1)

        });

       
  

})