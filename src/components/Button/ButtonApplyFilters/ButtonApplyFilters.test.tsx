import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ButtonApplyFilters } from './ButtonApplyFilters'; // Update the path!

describe('ButtonApplyFilters Component', () => {
  it('renders with the correct button name', () => {
    const { getByText } = render(
      <ButtonApplyFilters buttonName="Apply Filter" onPress={jest.fn()} />
    );

    const buttonText = getByText('Apply Filter');
    expect(buttonText).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();

    const { getByTestId } = render(
      <ButtonApplyFilters buttonName="Reset" onPress={onPressMock} />
    );

    const button = getByTestId('button');
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when disabled', () => {
    const onPressMock = jest.fn();

    const { getByTestId } = render(
      <ButtonApplyFilters buttonName="Apply Filter" onPress={onPressMock} disabled={true} />
    );

    const button = getByTestId('button');
    fireEvent.press(button);

    expect(onPressMock).not.toHaveBeenCalled();
  });
});
