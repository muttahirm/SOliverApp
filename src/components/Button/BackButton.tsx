import * as React from 'react';
import { TouchableOpacity } from 'react-native';
// import { Theme } from 'src/hooks';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './Button.styles';
import { IButton } from '../../types';

const ButtonBack = ({ onButtonPress, ...rest }: IButton) => {

  return (
    <TouchableOpacity
      {...rest}
      style={styles.button}
      onPress={onButtonPress}
      testID="button-back"
    >
      {/* Back arrow icon */}
      <MaterialCommunityIcons
        name={'keyboard-backspace'}
        size={32}
        color={'black'}
        testID="back-arrow-icon"
      />
    </TouchableOpacity>
  );
};

export default ButtonBack;
