import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import  Adapter from 'enzyme-adapter-react-16';
import Day from '../../components/Day/day';
import Calendar from './calendar';

configure({ adapter: new Adapter() });

describe('caldendar tests', () => {

    it('it should have the correct number of days', () => {

       const wrapper =  mount(<Calendar />);
       console.log( "daylist length"  );
  
       expect(wrapper.find('.monthNo') ).toHaveLength(28)
       });


})