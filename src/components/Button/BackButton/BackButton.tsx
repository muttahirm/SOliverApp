import  React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './BackButton.styles';
import { IButton } from '../../../types';

const ButtonBack = memo(({ onButtonPress, ...rest }: IButton) => {

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
});

export default ButtonBack;
