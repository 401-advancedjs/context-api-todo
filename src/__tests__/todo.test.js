import React from 'react';
import Todo from '../components/todo/todo.js';
import renderer from 'react-test-renderer';

describe('<Todo />', () => {
  test('basic rendering', () => {
    const mountedTodo = shallow(<Todo />);
    expect(mountedTodo.find('section.todo')).toBeTruthy();
  });

  test('rendering follows the snapshot', () => {
    const snapshot = renderer.create(<Todo />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});