import React from 'react';
import { configure, shallow , mount} from 'enzyme';
import  Adapter from 'enzyme-adapter-react-16';
import ReminderList  from './reminder-list';
import Reminder from './reminder'

configure({ adapter: new Adapter() });



describe('Testing The Reminder Component', () => {

    it('should render Reminder ', () => {

        const wrapper=shallow(<Reminder />);
        wrapper.setProps( {
         
           text:'you suck',
           importance:'Yellow',
           time: '3:00'
            })

        expect( wrapper.contains("you suck") )
    });




})
