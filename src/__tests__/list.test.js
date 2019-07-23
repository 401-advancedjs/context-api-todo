import React from 'react';
import List from '../components/list/list.js';
import RefactorContext from '../components/context/context.js';
import renderer from 'react-test-renderer';

describe('<List />', () => {
  test('basic rendering', () => {
    const mountedList = shallow(<List />);
    expect(mountedList.find('ul')).toBeTruthy();
  });

  test('handles increments', () => {
    const mountedContext = mount(<RefactorContext />);
    const form = mountedContext.find('form');

    form.simulate('submit');
    expect(mountedContext.state('todoList.length').toEqual(1));
  });

  test('rendering follows the snapshot', () => {
    const snapshot = renderer.create(<List />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});