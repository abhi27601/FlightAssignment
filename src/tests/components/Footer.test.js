import React from 'react';
import { shallow } from "enzyme";
import { Footer } from '../../components/Footer';

let startLogout,wrapper;

beforeEach(() => {
    startLogout = jest.fn();
    wrapper = shallow(<Footer />);
    
})

test('should render Footer correctly', () => {
   
    expect(wrapper).toMatchSnapshot();
   // expect(wrapper.find('p.footer__title').text()).toBe('SpaceX Launch Programs');
})