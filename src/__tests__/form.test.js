import React from 'react';
import Form from '../components/form/form.js';
import RefactorContext from '../components/context/context.js';
import renderer from 'react-test-renderer';

describe('<Form />', () => {
  test('basic rendering', () => {
    const mountedForm = shallow(<Form />);
    expect(mountedForm.find('form')).toBeTruthy();
  });

  test('handles input change', () => {
    const mountedForm = mount(<Form />);
    const mountedContext = mount(<RefactorContext />);
    const input = mountedForm.find('input');

    input.simulate('change', {target: {value: 'Melissa'}});
    expect(mountedContext.state('item').toEqual('Melissa'));
  });

  test('rendering follows the snapshot', () => {
    const snapshot = renderer.create(<Form />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});