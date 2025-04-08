// components/Button/ButtonApplyFilters.tsx
import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './Button.styles.ts';

type Props = {
  onPress: () => void;
  buttonName: string;
  disabled?: boolean;
};

export const ButtonApplyFilters = ({onPress, buttonName, disabled = false}: Props) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({pressed}) => [
        styles.buttonBase,
        buttonName === 'Apply Filter' ? styles.buttonEnabled : styles.buttonReset,
        pressed && styles.buttonPressed,
      ]}
      testID="button">
      <Text style={styles.buttonText}>{buttonName}</Text>
    </Pressable>
  );
};
