import React from 'react';
import Counter from '../components/counter/counter.js';
import RefactorContext from '../components/context/context.js';
import renderer from 'react-test-renderer';

describe('<Counter />', () => {
  test('basic rendering', () => {
    const mountedCounter = shallow(<Counter />);
    expect(mountedCounter.find('h2')).toBeTruthy();
  });

  test('handles increments', () => {
    const mountedContext = mount(<RefactorContext />);
    const form = mountedContext.find('form');

    form.simulate('submit');
    expect(mountedContext.state('count').toEqual(1));
  });

  test('rendering follows the snapshot', () => {
    const snapshot = renderer.create(<Counter />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});