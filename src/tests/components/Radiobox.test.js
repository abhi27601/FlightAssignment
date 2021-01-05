import React from 'react';
import { shallow } from "enzyme";
import Checkbox from "../../components/Checkbox";

test('should render expensedahboard page', () => {
    const wrapper = shallow(<Checkbox />)
    expect(wrapper).toMatchSnapshot();
})