import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders with the correct title', () => {
    const { getByText } = render(
      <Button title="Click Me" onPress={jest.fn()} />
    );

    const title = getByText('Click Me');
    expect(title).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();

    const { getByText } = render(
      <Button title="Press Here" onPress={onPressMock} />
    );

    const button = getByText('Press Here');
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when disabled', () => {
    const onPressMock = jest.fn();

    const { getByText } = render(
      <Button title="Disabled" onPress={onPressMock} disabled={true} />
    );

    const button = getByText('Disabled');
    fireEvent.press(button);

    expect(onPressMock).not.toHaveBeenCalled();
  });
});
