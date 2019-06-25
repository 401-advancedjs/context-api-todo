import React from 'react';
import Form from '../components/form/form.js';
import renderer from 'react-test-renderer';

describe('<Form />', () => {
  test('basic rendering', () => {
    const mountedHeader = shallow(<Form />);
    expect(mountedHeader.find('form')).toBeTruthy();
  });

  test('rendering follows the snapshot', () => {
    const snapshot = renderer.create(<Form />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});