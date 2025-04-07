// components/Button/ButtonApplyFilters.tsx
import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './Button.styles.ts';

type Props = {
  onPress: () => void;
  disabled?: boolean;
};

export const ButtonApplyFilters = ({onPress, disabled = false}: Props) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({pressed}) => [
        styles.buttonBase,
        disabled ? styles.buttonDisabled : styles.buttonEnabled,
        pressed && styles.buttonPressed,
      ]}
      testID="button">
      <Text style={styles.buttonText}>Apply Filter</Text>
    </Pressable>
  );
};
