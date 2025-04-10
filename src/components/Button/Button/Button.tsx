import {Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import {styles} from './Button.styles';

interface ButtonProps {
  containerStyle?: StyleProp<ViewStyle>;
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {title, onPress, disabled} = props;

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({pressed}) => [
        styles.buttonBase,
        title === 'Apply Filter' ? styles.buttonEnabled : styles.buttonReset,
        pressed && styles.buttonPressed,
      ]}
      testID="button">
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};
