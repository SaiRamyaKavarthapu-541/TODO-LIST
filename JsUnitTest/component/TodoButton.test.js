import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import TodoButton from '../../component/common/TodoButton';


describe('Todo Button', () => {
  it('Test click event', () => {
    const todoButtonClick = sinon.spy();
    const button = shallow((<TodoButton onClick={todoButtonClick}/>));
    button.find('button').simulate('click');
    expect(todoButtonClick.calledOnce).toBe(true)
  });
});