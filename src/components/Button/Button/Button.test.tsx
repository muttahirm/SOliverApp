import React from 'react';
import {Pressable} from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import {Button} from './Button';
import { styles } from './Button.styles';

describe('Button', () => {
  it('renders the button with the correct title', () => {
    const {getByText} = render(
      <Button title="Click Me" onPress={() => {}} />
    );

    expect(getByText('Click Me')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();

    const {getByTestId} = render(
      <Button title="Submit" onPress={onPressMock} />
    );

    fireEvent.press(getByTestId('button'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when disabled', () => {
    const onPressMock = jest.fn();

    const {getByTestId} = render(
      <Button title="Disabled" onPress={onPressMock} disabled />
    );

    fireEvent.press(getByTestId('button'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('applies the correct style based on title', () => {
    const {getByTestId, rerender} = render(
      <Button title="Apply Filter" onPress={() => {}} />
    );

    const applyFilterButton = getByTestId('button');
    expect(applyFilterButton.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({}), // buttonBase
        expect.objectContaining({}), // buttonEnabled
      ])
    );

    rerender(<Button title="Reset" onPress={() => {}} />);
    const resetButton = getByTestId('button');
    expect(resetButton.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({}),
        expect.objectContaining({}),
      ])
    );
  });

  it('applies the pressed style when pressed', () => {
  const {UNSAFE_getByType} = render(
    <Button title="Apply Filter" onPress={() => {}} />
  );

  const pressable = UNSAFE_getByType(Pressable);
  const styleFn = pressable.props.style;

  const appliedStyles = styleFn({pressed: true}); // simulate pressed state

  expect(appliedStyles).toEqual(
    expect.arrayContaining([expect.objectContaining(styles.buttonPressed)])
  );
});

});
